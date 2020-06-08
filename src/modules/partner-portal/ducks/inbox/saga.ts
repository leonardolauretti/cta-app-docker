import { takeEvery, put } from 'redux-saga/effects';
import { ActionTypes } from './types';
import InboxService from './service';

export default function*() {
    yield takeEvery(ActionTypes.FETCH_INBOX_REQUEST, fetchInboxWorker);
}

function* fetchInboxWorker() {
    yield put({ type: ActionTypes.SET_BUSY, payload: true });
    try {
        const inboxService = new InboxService();
        const chats = yield inboxService.fetchInbox();
        yield put({ type: ActionTypes.FETCH_INBOX_SUCCESS });
        yield put({ type: ActionTypes.SET_CHATS, payload: chats });
    } catch(error) {
        console.log('fetchInboxWorkerError', error);
    }
    yield put({ type: ActionTypes.SET_BUSY, payload: false });
}