import { takeEvery, put, select } from 'redux-saga/effects';
import { ActionTypes } from './types';
import { RankingService } from './service';
import { tokenSelector } from '../root/selectors';

export default function*() {
    yield takeEvery(ActionTypes.FETCH_RANKING_REQUEST, fetchRanking);
}

function* serviceFactory() {
    const token = yield select(tokenSelector);
    return new RankingService(token);
}

function* fetchRanking(action) {
    try {
        const rankingService = yield serviceFactory();

        const ranking = yield rankingService.fetchRanking().catch((error) => {
            throw new Error('Falha ao resgatar ranking de profissionais');
        });

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
            payload: error,
        });
    }
}