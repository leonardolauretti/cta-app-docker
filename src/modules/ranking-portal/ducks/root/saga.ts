import { takeEvery, all, put, select } from 'redux-saga/effects';
import { ActionTypes } from './types';
import { RankingService } from './service';
import _ from 'lodash';

export default function* () {
    yield takeEvery(ActionTypes.FETCH_RANKING_REQUEST, fetchRanking);
}

function* serviceFactory() {
    return new RankingService();
}

function* fetchRanking(action) {
    try {
        const rankingService = yield serviceFactory();

        const ranking = yield rankingService.fetchRanking().catch((error) => {
            throw new Error('Falha na recuperação do ranking');
        });

        function capitalizeFirst(str) {
            str = !str ? '' : str;
            str = str.toLowerCase();

            return _.startCase(str);

            /*const words = str.split(' ').map(word => {
                return word[0].toUpperCase() + word.substr(1);
            });

            return words.join(' ');
            */
        }

        function uppercase(str) {
            str = !str ? '' : str;
            return str.toUpperCase();
        }

        ranking.entries = ranking.entries.map(entry => {
            return {
                ...entry,
                first_name: capitalizeFirst(entry.first_name),
                last_name: capitalizeFirst(entry.last_name),
                neighborhood: capitalizeFirst(entry.neighborhood),
                city: capitalizeFirst(entry.city),
                state: uppercase(entry.state),
                performance: parseFloat(entry.performance),
            };
        });

        console.log('rankingCretion', ranking.created);

        yield put({
            type: ActionTypes.POPULATE_RANKING,
            payload: ranking,
        });

        yield put({
            type: ActionTypes.FETCH_RANKING_SUCCESS,
            payload: ranking,
        });

    } catch (error) {

        yield put({
            type: ActionTypes.FETCH_RANKING_FAILURE,
            payload: error
        });
    }
}