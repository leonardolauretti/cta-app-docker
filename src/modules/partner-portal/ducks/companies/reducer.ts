import { ActionTypes, IState } from './types';

const initialState: IState = {

    companies: {
        byId: {},
        allIds: [],
    },
};

export default function(state = initialState, action) {
    switch (action.type) {

        case ActionTypes.SET_COMPANIES:
            return setCompanies(state, action);

        case ActionTypes.PUSH_COMPANY:
            return pushCompany(state, action);

        case ActionTypes.UPDATE_COMPANY:
            return updateCompany(state, action);

        case ActionTypes.REMOVE_COMPANY:
            return removeCompany(state, action);

        default:
            return { ...state };
    }
}

function setCompanies(state: IState, action) {

    const companies = action.payload;

    const companiesById = {};
    const allCompaniesIds = [];

    companies.map((company) => {
        const { id } = company;

        companiesById[id] = company;
        allCompaniesIds.push(id);
    });

    return {
        ...state,
        companies: {
            byId: companiesById,
            allIds: allCompaniesIds,
        },
    };
}

function pushCompany(state: IState, action) {

    const company = action.payload;
    const { id } = company;

    const companiesById = { ...state.companies.byId };
    const allCompaniesIds = [...state.companies.allIds];

    companiesById[id] = company;

    if (!allCompaniesIds.includes(id)) {
        allCompaniesIds.push(id);
    }

    return {
        ...state,
        companies: {
            byId: companiesById,
            allIds: allCompaniesIds,
        },
    };
}

function updateCompany(state: IState, action) {
    const company = action.payload;
    const { id } = company;

    const companiesById = { ...state.companies.byId };
    const allCompaniesIds = [...state.companies.allIds];

    if (allCompaniesIds.includes(id)) {
        companiesById[id] = company;
    }

    return {
        ...state,
        companies: {
            byId: companiesById,
            allIds: allCompaniesIds,
        },
    };
}

function removeCompany(state: IState, action) {

    const id = action.payload;

    const companiesById = { ...state.companies.byId };
    const allCompaniesIds = [...state.companies.allIds];

    if (allCompaniesIds.includes(id)) {
        const index = allCompaniesIds.indexOf(id);
        allCompaniesIds.splice(index, 1);
    }

    delete companiesById[id];

    return {
        ...state,
        companies: {
            byId: companiesById,
            allIds: allCompaniesIds,
        },
    };
}