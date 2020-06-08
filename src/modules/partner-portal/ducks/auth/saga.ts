import { takeEvery, put, call, select, apply } from 'redux-saga/effects';
import { ActionTypes } from './types';
import { AuthService } from './service';
import { tokenSelector } from './selectors';

export default function* () {
    yield takeEvery(ActionTypes.REGISTER_REQUEST, register);
    yield takeEvery(ActionTypes.AUTHENTICATE_REQUEST, authenticate);
}

function* authFactory(includeBearer?: boolean) {
    let bearer = yield select(tokenSelector);
    return includeBearer ? new AuthService(bearer) : new AuthService();
}

function* register(action) {
    try {
        let authService = yield authFactory();
        
        let { token } = yield authService.register(action.payload).catch((error) => {
            throw new Error('Falha ao registrar usuário');
        });

        yield put({
            type: ActionTypes.SET_TOKEN,
            payload: token,
        });

        authService = yield authFactory(true);

        let user = yield authService.me().catch((error) => {
            throw new Error('Falha ao carregar o usuário');
        });
        
        yield put({
            type: ActionTypes.SET_USER,
            payload: {
                first_name: user.first_name,
                last_name: user.last_name,
                email: user.email,
                avatar_url: user.avatar_url,
            },
        });

        yield put({
            type: ActionTypes.SET_ALLOW,
            payload: true,
        });

        yield put({
            type: ActionTypes.REGISTER_SUCCESS,
        });

    } catch (error) {

        yield put({
            type: ActionTypes.REGISTER_FAILURE,
        });

        console.log(error);
    }
}

function* authenticate(action) {
    try {
        let authService = yield authFactory();

        let { token } = yield authService.authenticate(action.payload).catch((error) => {
            throw new Error('Credenciais inválidas');
        });

        yield put({
            type: ActionTypes.SET_TOKEN,
            payload: token,
        });

        authService = yield authFactory(true);

        let user = yield authService.me().catch((error) => {
            throw new Error('Falha ao carregar o usuário');
        });
        
        yield put({
            type: ActionTypes.SET_USER,
            payload: {
                first_name: user.first_name,
                last_name: user.last_name,
                email: user.email,
                avatar_url: user.avatar_url,
            },
        });

        yield put({
            type: ActionTypes.SET_ALLOW,
            payload: true,
        });

        yield put({
            type: ActionTypes.AUTHENTICATE_SUCCESS,
        });
        
    } catch (error) {

        yield put({
            type: ActionTypes.AUTHENTICATE_FAILURE,
        });

        console.log(error);
    }
}

function* signUpWorker(action) {

}

function* forgetPasswordWorker(action) {

}

function* resetPasswordWorker(action) {

}