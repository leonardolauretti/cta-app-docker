export enum ActionTypes {
    FETCH_COMPANIES_REQUEST = 'PartnerPortalModule/companies/FETCH_COMPANIES_REQUEST',
    FETCH_COMPANIES_SUCCESS = 'PartnerPortalModule/companies/FETCH_COMPANIES_SUCCESS',
    FETCH_COMPANIES_FAILURE = 'PartnerPortalModule/companies/FETCH_COMPANIES_FAILURE',

    CREATE_COMPANY_REQUEST = 'PartnerPortalModule/companies/CREATE_COMPANY_REQUEST',
    CREATE_COMPANY_SUCCESS = 'PartnerPortalModule/companies/CREATE_COMPANY_SUCCESS',
    CREATE_COMPANY_FAILURE = 'PartnerPortalModule/companies/CREATE_COMPANY_FAILURE',

    UPDATE_COMPANY_REQUEST = 'PartnerPortalModule/companies/UPDATE_COMPANY_REQUEST',
    UPDATE_COMPANY_SUCCESS = 'PartnerPortalModule/companies/UPDATE_COMPANY_SUCCESS',
    UPDATE_COMPANY_FAILURE = 'PartnerPortalModule/companies/UPDATE_COMPANY_FAILURE',

    DELETE_COMPANY_REQUEST = 'PartnerPortalModule/companies/DELETE_COMPANY_REQUEST',
    DELETE_COMPANY_SUCCESS = 'PartnerPortalModule/companies/DELETE_COMPANY_SUCCESS',
    DELETE_COMPANY_FAILURE = 'PartnerPortalModule/companies/DELETE_COMPANY_FAILURE',

    SET_COMPANIES = 'PartnerPortalModule/companies/SET_COMPANIES',
    REMOVE_COMPANY = 'PartnerPortalModule/companie/REMOVE_COMPANY',
    PUSH_COMPANY = 'PartnerPortalModule/companies/PUSH_COMPANY',
    UPDATE_COMPANY = 'PartnerPortalModule/companies/UPDATE_COMPANY',
}

export interface Company {
    id: string;
    company_name: string;
    trading_name: string;
    document: string;
}

export interface IState {

    companies: {
        byId: { [id: string]: Company },
        allIds: string[],
    },
}