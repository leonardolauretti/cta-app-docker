import { takeEvery, call, put, select } from 'redux-saga/effects';
import { ActionTypes } from './types';
import { authenticate as authenticateService } from './service';

export default function* () {
    yield takeEvery(ActionTypes.AUTHENTICATE_REQUEST, authenticate);
}

function* authenticate(action) {
    try {
        const response = yield authenticateService(action.payload);

        if (response) {

            yield put({
                type: ActionTypes.AUTHENTICATE_SUCCESS,
                payload: { access_code: action.payload },
            });

            yield put({
                type: ActionTypes.SET_ACCESS_CODE,
                payload: action.payload.access_code,
            });
        }
    } catch(error) {
        console.log('Error', error);

        yield put({
            type: ActionTypes.AUTHENTICATE_FAILURE,
            payload: error,
        });
    }
}