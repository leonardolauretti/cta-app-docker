interface Address {
    postal_code: string;
    street: string;
    number: string;
    complement: string;
    neighborhood: string;
    city: string;
    state: string;
    country: string;
}

interface Profile {
    first_name: string;
    last_name: string;
    avatar_url: string;
}

interface Company {
    company_name: string;
    trading_name: string;
    document: string;
    phone: string;
    email: string;
    address: Address;
    verified: boolean;
}

export interface IState {

    user: {
        id: string;
        email: string;
    },

    profile: {
        first_name: string;
        last_name: string;
        avatar_url: string;
    };

    address: Address;

    partner: {
        id: string;
        companies: string[];
    };

    companies: {
        byId: { [id: string]: Company };
        allIds: string[];
    };
}

export enum ActionTypes {
    UPDATE_AVATAR_REQUEST = 'PartnerPortalModule/account/UPDATE_AVATAR_REQUEST',
    UPDATE_AVATAR_SUCCESS = 'PartnerPortalModule/account/UPDATE_AVATAR_SUCCESS',
    UPDATE_AVATAR_FAILURE = 'PartnerPortalModule/account/UPDATE_AVATAR_FAILURE',

    DELETE_AVATAR_REQUEST = 'PartnerPortalModule/account/DELETE_AVATAR_REQUEST',
    DELETE_AVATAR_SUCCESS = 'PartnerPortalModule/account/DELETE_AVATAR_SUCCESS',
    DELETE_AVATAR_FAILURE = 'PartnerPortalModule/account/DELETE_AVATAR_FAILURE',

    FETCH_ADDRESS_REQUEST = 'PartnerPortalModule/account/FETCH_ADDRESS_REQUEST',
    FETCH_ADDRESS_SUCCESS = 'PartnerPortalModule/account/FETCH_ADDRESS_SUCCESS',
    FETCH_ADDRESS_FAILURE = 'PartnerPortalModule/account/FETCH_ADDRESS_FAILURE',

    UPDATE_ADDRESS_REQUEST = 'PartnerPortalModule/account/UPDATE_ADDRESS_REQUEST',
    UPDATE_ADDRESS_SUCCESS = 'PartnerPortalModule/account/UPDATE_ADDRESS_SUCCESS',
    UPDATE_ADDRESS_FAILURE = 'PartnerPortalModule/account/UPDATE_ADDRESS_FAILURE',

    CREATE_COMPANY_REQUEST = 'PartnerPortalModule/account/CREATE_COMPANY_REQUEST',
    CREATE_COMPANY_SUCCESS = 'PartnerPortalModule/account/CREATE_COMPANY_SUCCESS',
    CREATE_COMPANY_FAILURE = 'PartnerPortalModule/account/CREATE_COMPANY_FAILURE',

    UPDATE_COMPANY_REQUEST = 'PartnerPortalModule/account/UPDATE_COMPANY_REQUEST',
    UPDATE_COMPANY_SUCCESS = 'PartnerPortalModule/account/UPDATE_COMPANY_SUCCESS',
    UPDATE_COMPANY_FAILURE = 'PartnerPortalModule/account/UPDATE_COMPANY_FAILURE',

    DELETE_COMPANY_REQUEST = 'PartnerPortalModule/account/DELETE_COMPANY_REQUEST',
    DELETE_COMPANY_SUCCESS = 'PartnerPortalModule/account/DELETE_COMPANY_SUCCESS',
    DELETE_COMPANY_FAILURE = 'PartnerPortalModule/account/DELETE_COMPANY_FAILURE',

    CHANGE_PASSWORD_REQUEST = 'PartnerPortalModule/account/CHANGE_PASSWORD_REQUEST',
    CHANGE_PASSWORD_SUCCESS = 'PartnerPortalModule/account/CHANGE_PASSWORD_SUCCESS',
    CHANGE_PASSWORD_FAILURE = 'PartnerPortalModule/account/CHANGE_PASSWORD_FAILURE',










    FETCH_PROFILE_REQUEST = 'PartnerPortalModule/account/FETCH_PROFILE_REQUEST',
    FETCH_PROFILE_SUCCESS = 'PartnerPortalModule/account/FETCH_PROFILE_SUCCESS',
    FETCH_PROFILE_FAILURE = 'PartnerPortalModule/account/FETCH_PROFILE_FAILURE',

    MOUNT_ACCOUNT_REQUEST = 'PartnerPortalModule/account/MOUNT_ACCOUNT_REQUEST',
    MOUNT_ACCOUNT_SUCCESS = 'PartnerPortalModule/account/MOUNT_ACCOUNT_SUCCESS',
    MOUNT_ACCOUNT_FAILURE = 'PartnerPortalModule/account/MOUNT_ACCOUNT_FAILURE',

    FETCH_COMPANIES_REQUEST = 'PartnerPortalModule/account/FETCH_COMPANIES_REQUEST',
    FETCH_COMPANIES_SUCCESS = 'PartnerPortalModule/account/FETCH_COMPANIES_SUCCESS',
    FETCH_COMPANIES_FAILURE = 'PartnerPortalModule/account/FETCH_COMPANIES_FAILURE',




    SET_ADDRESS = 'PartnerPortalModule/account/SET_ADDRESS',
    SET_COMPANIES = 'PartnerPortalModule/account/SET_COMPANIES',
    SET_PROFILE = 'PartnerPortalModule/account/SET_PROFILE',
    SET_AVATAR_URL = 'PartnerPortalModule/account/SET_AVATAR_URL',
    MERGE_ADDRESS = 'PartnerPortalModule/account/MERGE_ADDRESS',

    SET_ACCOUNT = 'PartnerPortalModule/account/SET_ACCOUNT',
}

export interface UpdateAddressActionData {
    postal_code?: string;
    street?: string;
    number?: string;
    complement?: string;
    neighborhood?: string;
    city?: string;
    state?: string;
    country?: string;
};