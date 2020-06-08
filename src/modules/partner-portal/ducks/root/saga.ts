import { takeEvery, put, select } from 'redux-saga/effects';
import { ActionTypes } from './types';
import { AuthService } from './service';
import { tokenSelector } from './selectors';

export default function* () {
    yield takeEvery(ActionTypes.AUTHENTICATE_REQUEST, authenticate);
    yield takeEvery(ActionTypes.REGISTER_REQUEST, register);
    yield takeEvery(ActionTypes.RECOVER_PASSWORD_REQUEST, recoverPassword);
    yield takeEvery(ActionTypes.RESET_PASSWORD_REQUEST, resetPassword);
    yield takeEvery(ActionTypes.DISCONNECT_REQUEST, disconnect);
}

function* serviceFactory() {
    const bearer = yield select(tokenSelector);
    return new AuthService(bearer);
}

function* register(action) {
    try {
        let authService = yield serviceFactory();

        const { token } = yield authService.register(action.payload).catch((error) => {
            throw new Error('Falha ao registrar usuário');
        });

        yield put({
            type: ActionTypes.SET_TOKEN,
            payload: token,
        });

        authService = yield serviceFactory();

        const user = yield authService.me().catch((error) => {
            throw new Error('Falha ao carregar o usuário');
        });

        yield put({
            type: ActionTypes.SET_USER,
            payload: {
                first_name: user.profile.first_name,
                last_name: user.profile.last_name,
                email: user.email,
                avatar_url: user.profile.avatar_url,
            },
        });

        yield put({
            type: ActionTypes.REGISTER_SUCCESS,
        });

        yield put({
            type: ActionTypes.SET_AUTHENTICATED,
            payload: true,
        });

    } catch (error) {

        yield put({
            type: ActionTypes.REGISTER_FAILURE,
            payload: error
        });
    }
}

function* authenticate(action) {
    try {
        let authService = yield serviceFactory();

        const { token } = yield authService.authenticate(action.payload).catch((error) => {
            throw new Error('Credenciais inválidas');
        });

        yield put({
            type: ActionTypes.SET_TOKEN,
            payload: token,
        });

        authService = yield serviceFactory();

        const user = yield authService.me().catch((error) => {
            throw new Error('Falha ao carregar o usuário');
        });

        yield put({
            type: ActionTypes.SET_USER,
            payload: {
                first_name: user.profile.first_name,
                last_name: user.profile.last_name,
                email: user.email,
                avatar_url: user.profile.avatar_url,
            },
        });

        yield put({
            type: ActionTypes.SET_AUTHENTICATED,
            payload: true,
        });

        yield put({
            type: ActionTypes.AUTHENTICATE_SUCCESS,
        });

    } catch (error) {

        yield put({
            type: ActionTypes.AUTHENTICATE_FAILURE,
            payload: error,
        });
    }
}

function* recoverPassword(action) {
    try {
        const authService = yield serviceFactory();

        yield authService.recover(action.payload).catch((error) => {
            throw new Error('Credenciais inválidas');
        });

        yield put({
            type: ActionTypes.RECOVER_PASSWORD_SUCCESS,
        });

    } catch (error) {

        yield put({
            type: ActionTypes.RECOVER_PASSWORD_FAILURE,
            payload: error,
        });
    }
}

function* resetPassword(action) {
    try {
        const authService = yield serviceFactory();

        const { token } = yield authService.reset(action.payload).catch((error) => {
            throw new Error('Token inválido');
        });

        yield put({
            type: ActionTypes.RESET_PASSWORD_SUCCESS,
        });

    } catch (error) {

        yield put({
            type: ActionTypes.RESET_PASSWORD_FAILURE,
            payload: error,
        });
    }
}

function* disconnect(action) {

    yield put({
        type: ActionTypes.SET_AUTHENTICATED,
        payload: false,
    });

    yield put({
        type: ActionTypes.SET_TOKEN,
        payload: null,
    });

    yield put({
        type: ActionTypes.SET_USER,
        payload: {
            first_name: null,
            last_name: null,
            email: null,
            avatar_url: null,
        },
    });

    yield put({
        type: ActionTypes.DISCONNECT_SUCCESS,
    });
}