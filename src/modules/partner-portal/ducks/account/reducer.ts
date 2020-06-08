import { IState, ActionTypes } from './types';

const initialState: IState = {

    user: {
        id: '',
        email: '',
    },

    profile: {
        first_name: '',
        last_name: '',
        avatar_url: '',
    },

    address: null,

    partner: {
        id: '',
        companies: [],
    },

    companies: {
        byId: {},
        allIds: [],
    },
};

export default function(state = initialState, action) {
    switch (action.type) {

        case ActionTypes.SET_ACCOUNT:
            return setAccount(state, action);

        case ActionTypes.SET_PROFILE:
            return setProfile(state, action);

        case ActionTypes.SET_ADDRESS:
            return setAddress(state, action);

        case ActionTypes.SET_COMPANIES:
            return { ...state, companies: action.payload };

        case ActionTypes.SET_AVATAR_URL:
            return { ...state, profile: { ...state.profile, avatar_url: action.payload } };

        default:
            return { ...state };
    }
}

function setAccount(state: IState, action) {
    const { payload } = action;

    const companies = payload.partner.companies;

    const companiesById = {};
    const allCompaniesIds = [];

    const partnerCompanies = companies.map((company) => {
        const { id } = company;

        companiesById[id] = company;
        allCompaniesIds.push(id);
        return id;
    });

    return {
        ...state,
        user: {
            ...payload.user,
        },
        profile: {
            ...payload.profile,
        },
        address: payload.address,
        partner: {
            id: payload.partner.id,
            companies: partnerCompanies,
        },
        companies: {
            byId: companiesById,
            allIds: allCompaniesIds,
        },
    }
}

function setProfile(state, action) {
    return {
        ...state,
        profile: {
            ...state.profile,
            first_name: action.payload.first_name,
            last_name: action.payload.last_name,
            email: action.payload.email,
            avatar_url: action.payload.avatar_url,
        },
    };
}

function setAddress(state, action) {
    return {
        ...state,
        address: action.payload,
    };
}