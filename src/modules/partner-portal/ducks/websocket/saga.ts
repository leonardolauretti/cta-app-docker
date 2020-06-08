import { put, takeEvery } from 'redux-saga/effects';
import { ActionTypes, MessageTypes } from './types';
//import websocket from './websocket';

export default function*() {

    yield takeEvery(MessageTypes.SEND_MESSAGE, sendMessageWorker);
    yield takeEvery(ActionTypes.WEBSOCKET_CHAT_SEND, sendMessageWorker);
}

function* sendMessageWorker(action) {
    console.log(action);
    //websocket.emit('events', action.payload);
}