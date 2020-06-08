import { takeEvery, put, call, select } from 'redux-saga/effects';
import { ActionTypes } from './types';
import { InfoService } from './service';
import { tokenSelector } from '../root/selectors';

export default function* () {
    yield takeEvery(ActionTypes.FETCH_NEWS_REQUEST, fetchNews);
    yield takeEvery(ActionTypes.FETCH_STATUS_REQUEST, fetchStatus);
};

function* serviceFactory() {
    const bearer = yield select(tokenSelector);
    return new InfoService(bearer);
}

function remove_html(text: string) {
    return text.replace(/<[^>]+>/g, '');
}

function* fetchNews(action) {
    try {
        const infoService = yield serviceFactory();
        const news = yield infoService.fetchNews();

        const items = news.map((item) => {
            return {
                title: item.title.rendered,
                preview: remove_html(item.excerpt.rendered),
                href: item.link,
            };
        });

        yield put({
            type: ActionTypes.SET_NEWS,
            payload: items,
        });

        yield put({
            type: ActionTypes.FETCH_NEWS_SUCCESS,
            payload: items,
        });

    } catch (error) {

        yield put({
            type: ActionTypes.FETCH_NEWS_FAILURE,
            payload: error,
        });
    }
}

function* fetchStatus(action) {
    try {
        const infoService = yield serviceFactory();
        const status = yield infoService.fetchStatus();

        const items = Object.keys(status).map((course_name) => {
            return {
                course_name,
                count: status[course_name],
            };
        });

        yield put({
            type: ActionTypes.FETCH_STATUS_SUCCESS,
            payload: items,
        });

        yield put({
            type: ActionTypes.SET_STATUS,
            payload: items,
        });

    } catch (error) {

        yield put({
            type: ActionTypes.FETCH_STATUS_FAILURE,
            payload: error,
        });
    }
}