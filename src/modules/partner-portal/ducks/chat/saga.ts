import { put, takeEvery, select } from 'redux-saga/effects';
import { ActionTypes } from './types';
import websocket from '../websocket/websocket';
import { tokenSelector } from '../auth/selectors';
import { ChatService } from './service';
import {
    activeProfileIdSelector,
} from './selectors';

export default function*() {
    yield takeEvery(ActionTypes.SEND_MESSAGE, sendMessageWorker);
    yield takeEvery(ActionTypes.FETCH_PROFILES_REQUEST, fetchProfilesJob);
    yield takeEvery(ActionTypes.FETCH_CHATS_REQUEST, fetchChats);
}

function* serviceFactory() {
    let token = yield select(tokenSelector);
    return new ChatService(token);
}

function* sendMessageWorker(action) {
    console.log(action);
    websocket.emit('chat_message', action.payload, (response) =>
        console.log('Response:', response),
    );
}

function* fetchProfilesJob(action) {
    try {
        let chatService = yield serviceFactory();
        let profiles = yield chatService.fetchProfiles();

        console.log('Profiles', profiles);

        yield put({
            type: ActionTypes.FETCH_PROFILES_SUCCESS,
            payload: profiles,
        });

        yield put({
            type: ActionTypes.SET_PROFILES,
            payload: profiles,
        });

    } catch(error) {
        console.log(error);

        yield put({
            type: ActionTypes.FETCH_PROFILES_FAILURE,
            payload: error,
        });
    }
}

function* fetchChats(action) {
    try {
        let chatService = yield serviceFactory();
        let profileId = yield select(activeProfileIdSelector);
        let chats = yield chatService.fetchChats(profileId);

        yield put({
            type: ActionTypes.FETCH_CHATS_SUCCESS,
            payload: {
                profileId,
                chats,
            },
        });

        for (let chat of chats) {
            yield put({
                type: ActionTypes.PUSH_CHAT,
                payload: {
                    profileId,
                    chat,
                },
            });
        }
    } catch(error) {
        console.log(error);

        yield put({
            type: ActionTypes.FETCH_CHATS_FAILURE,
            payload: error,
        });
    }
}