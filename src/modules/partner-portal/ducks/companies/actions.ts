import { ActionTypes } from './types';

export const fetchCompaniesAction = () => {
    return {
        type: ActionTypes.FETCH_COMPANIES_REQUEST,
    };
};

export const createCompanyAction = (data) => {
    return {
        type: ActionTypes.CREATE_COMPANY_REQUEST,
        payload: data,
    };
};

export const updateCompanyAction = (id, data) => {
    return {
        type: ActionTypes.UPDATE_COMPANY_REQUEST,
        payload: { id, data },
    };
};

export const deleteCompanyAction = (id) => {
    return {
        type: ActionTypes.DELETE_COMPANY_REQUEST,
        payload: id,
    };
};