import {
    ActionTypes,
    UpdateAddressActionData,
} from './types';

interface CreateCompanyData {
    company_name: string;
    trading_name: string;
    document: string;

    postal_code: string;
    street: string;
    number: string;
    comlement: string;
    neighborhood: string;
    city: string;
    state: string;
    country: string;

    phone: string;
    email: string;
}

export const fetchProfileAction = () => {
    return {
        type: ActionTypes.FETCH_PROFILE_REQUEST,
    };
};

export const updateAvatarAction = (file?: File) => {
    return {
        type: ActionTypes.UPDATE_AVATAR_REQUEST,
        payload: file,
    };
};

export const deleteAvatarAction = () => {
    return {
        type: ActionTypes.DELETE_AVATAR_REQUEST,
    };
};

export const changePasswordAction = (current_password: string, new_password: string) => {
    return {
        type: ActionTypes.CHANGE_PASSWORD_REQUEST,
        payload: { current_password, new_password },
    };
};

export const fetchAddressAction = () => {
    return {
        type: ActionTypes.FETCH_ADDRESS_REQUEST,
    };
};

export const updateAddressAction = (data: UpdateAddressActionData) => {
    return {
        type: ActionTypes.UPDATE_ADDRESS_REQUEST,
        payload: data,
    };
};

export const fetchCompaniesAction = () => {
    return {
        type: ActionTypes.FETCH_COMPANIES_REQUEST,
    };
};

export const createCompanyAction = (data: CreateCompanyData) => {
    return {
        type: ActionTypes.CREATE_COMPANY_REQUEST,
        payload: data,
    }
};

export const updateCompanyAction = (id: string, data: any) => {
    return {
        type: ActionTypes.UPDATE_COMPANY_REQUEST,
        payload: { id, data },
    }
};

export const deleteCompanyAction = (id: string) => {
    return {
        type: ActionTypes.DELETE_COMPANY_REQUEST,
        payload: id,
    }
};