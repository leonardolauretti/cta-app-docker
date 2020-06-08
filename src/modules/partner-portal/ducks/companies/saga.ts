import { takeEvery, put, call, select, } from 'redux-saga/effects';
import { ActionTypes } from './types';
import { tokenSelector } from '../root/selectors';
import { CompanyService } from './service';

export default function* () {
    yield takeEvery(ActionTypes.FETCH_COMPANIES_REQUEST, fetchCompanies);
    yield takeEvery(ActionTypes.CREATE_COMPANY_REQUEST, createCompany);
    yield takeEvery(ActionTypes.UPDATE_COMPANY_REQUEST, updateCompany);
    yield takeEvery(ActionTypes.DELETE_COMPANY_REQUEST, deleteCompany);
}

function* serviceFactory() {
    const bearer = yield select(tokenSelector);
    return new CompanyService(bearer);
}

function* fetchCompanies(action) {
    try {
        const companyService = yield serviceFactory();
        const companies = yield companyService.fetchCompanies();

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
        const companyService = yield serviceFactory();

        const company = yield companyService.createCompany(action.payload).catch((error) => {
            throw new Error('Falha ao criar empresa');
        });

        console.log('Created Company', company);

        yield put({
            type: ActionTypes.PUSH_COMPANY,
            payload: company,
        });

        yield put({
            type: ActionTypes.CREATE_COMPANY_SUCCESS,
            payload: company,
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
        const companyService = yield serviceFactory();

        const { id, data } = action.payload;

        const company = yield companyService.updateCompany(id, data).catch((error) => {
            throw new Error('Falha ao atualizar empresa');
        });

        yield put({
            type: ActionTypes.UPDATE_COMPANY,
            payload: data,
        });

        yield put({
            type: ActionTypes.UPDATE_COMPANY_SUCCESS,
            payload: company,
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
        const companyService = yield serviceFactory();

        const id = action.payload;

        const company = yield companyService.deleteCompany(id).catch((error) => {
            throw new Error('Falha ao remover empresa');
        });

        yield put({
            type: ActionTypes.REMOVE_COMPANY,
            payload: id,
        });

        yield put({
            type: ActionTypes.DELETE_COMPANY_SUCCESS,
            payload: company,
        });

    } catch (error) {

        yield put({
            type: ActionTypes.DELETE_COMPANY_FAILURE,
            payload: error,
        });
    }
}