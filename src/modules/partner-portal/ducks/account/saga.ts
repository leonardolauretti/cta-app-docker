import { takeEvery, put, call, select } from 'redux-saga/effects';
import { ActionTypes } from './types';
import { tokenSelector } from '../root/selectors';
import { ActionTypes as RootActionTypes } from '../root/types';
import { AccountService } from './service';

export default function* () {
    yield takeEvery(ActionTypes.FETCH_PROFILE_REQUEST, fetchProfile);
    yield takeEvery(ActionTypes.UPDATE_AVATAR_REQUEST, updateAvatar);
    yield takeEvery(ActionTypes.DELETE_AVATAR_REQUEST, deleteAvatar);
    yield takeEvery(ActionTypes.CHANGE_PASSWORD_REQUEST, changePassword);
    yield takeEvery(ActionTypes.FETCH_ADDRESS_REQUEST, fetchAddress);
    yield takeEvery(ActionTypes.UPDATE_ADDRESS_REQUEST, updateAddress);
    yield takeEvery(ActionTypes.FETCH_COMPANIES_REQUEST, fetchCompanies);
    yield takeEvery(ActionTypes.CREATE_COMPANY_REQUEST, createCompany);
    yield takeEvery(ActionTypes.UPDATE_COMPANY_REQUEST, updateCompany);
    yield takeEvery(ActionTypes.DELETE_COMPANY_REQUEST, deleteCompany);
}

function* serviceFactory() {
    const bearer = yield select(tokenSelector);
    return new AccountService(bearer);
}

function* updateAvatar(action) {
    try {
        const accountService = yield serviceFactory();
        const public_url = yield accountService.uploadAvatar(action.payload);

        yield put({
            type: ActionTypes.SET_AVATAR_URL,
            payload: public_url,
        });

        yield put({
            type: RootActionTypes.SET_AVATAR_URL,
            payload: public_url,
        });

        yield put({
            type: ActionTypes.UPDATE_AVATAR_SUCCESS,
            payload: public_url,
        });

    } catch (error) {

        yield put({
            type: ActionTypes.UPDATE_ADDRESS_FAILURE,
            payload: error,
        });
    }
}

function* deleteAvatar(action) {
    try {
        const accountService = yield serviceFactory();
        yield accountService.deleteAvatar();

        yield put({
            type: ActionTypes.DELETE_AVATAR_SUCCESS,
        });

    } catch (error) {

        yield put({
            type: ActionTypes.DELETE_AVATAR_FAILURE,
            payload: error,
        });
    }
}

function* changePassword(action) {
    try {
        const accountService = yield serviceFactory();
        const { current_password, new_password } = action.payload;

        yield accountService.changePassword(current_password, new_password);

        yield put({
            type: ActionTypes.CHANGE_PASSWORD_SUCCESS,
        });

    } catch (error) {

        yield put({
            type: ActionTypes.CHANGE_PASSWORD_FAILURE,
            payload: error,
        });
    }
}

function* fetchAddress(action) {
    try {
        const accountService = yield serviceFactory();
        const address = yield accountService.fetchAddress();

        yield put({
            type: ActionTypes.SET_ADDRESS,
            payload: address,
        });

        yield put({
            type: ActionTypes.FETCH_ADDRESS_SUCCESS,
            payload: address,
        });

    } catch (error) {

        yield put({
            type: ActionTypes.FETCH_ADDRESS_FAILURE,
            payload: error,
        });
    }
}

function* updateAddress(action) {
    try {
        const accountService = yield serviceFactory();

        const updated = yield accountService.updateAddress(action.payload);

        yield put({
            type: ActionTypes.SET_ADDRESS,
            payload: updated,
        });

        yield put({
            type: ActionTypes.UPDATE_ADDRESS_SUCCESS,
            address: updated,
        });

    } catch (error) {

        yield put({
            type: ActionTypes.UPDATE_ADDRESS_FAILURE,
            payload: error,
        });
    }
}

function* fetchCompanies(action) {
    try {
        const accountService = yield serviceFactory();
        const companies = yield accountService.fetchCompanies();

        yield put({
            type: ActionTypes.SET_COMPANIES,
            payload: companies,
        });

        yield put({
            type: ActionTypes.FETCH_COMPANIES_SUCCESS,
            payload: companies,
        });

    } catch (error) {

        yield put({
            type: ActionTypes.FETCH_COMPANIES_FAILURE,
            payload: error,
        });
    }
}

function* createCompany(action) {
    try {
        const accountService = yield serviceFactory();
        const created = yield accountService.createCompany(action.payload);

        yield put({
            type: ActionTypes.CREATE_COMPANY_SUCCESS,
            payload: created,
        });

    } catch (error) {

        yield put({
            type: ActionTypes.CREATE_COMPANY_FAILURE,
            payload: error,
        });
    }
}

function* updateCompany(action) {
    try {
        const accountService = yield serviceFactory();
        const updated = yield accountService.updateCompany(action.payload);

        yield put({
            type: ActionTypes.UPDATE_COMPANY_SUCCESS,
            payload: updated,
        });

    } catch (error) {

        yield put({
            type: ActionTypes.UPDATE_COMPANY_FAILURE,
            payload: error,
        });
    }
}

function* deleteCompany(action) {
    try {
        const accountService = yield serviceFactory();
        yield accountService.updateCompany(action.payload);

        yield put({
            type: ActionTypes.DELETE_COMPANY_SUCCESS,
        });

    } catch (error) {

        yield put({
            type: ActionTypes.DELETE_COMPANY_FAILURE,
            payload: error,
        });
    }
}

function* fetchProfile(action) {
    try {
        const accountService = yield serviceFactory();

        const me = yield accountService.fetchProfile().catch((error) => {
            throw new Error('Falha ao carregar perfil');
        });

        yield put({
            type: ActionTypes.SET_ACCOUNT,
            payload: me,
        });

        yield put({
            type: ActionTypes.FETCH_PROFILE_SUCCESS,
            payload: me,
        });

    } catch (error) {

        yield put({
            type: ActionTypes.FETCH_PROFILE_FAILURE,
            payload: error,
        });
    }
}