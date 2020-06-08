export interface Entry {
    id: string;
    first_name: string;
    last_name: string;
    avatar_url: string;
    neighborhood: string;
    city: string;
    state: string;
    performance: string;
    email: string;
    phone: string;
    resume_url: string;
}

export interface IState {
    ranking: {
        entries: string[];
        created: string;
    };

    entries: {
        byId: { [id: string]: Entry };
        allIds: string[];
    };
}

export enum ActionTypes {
    FETCH_RANKING_REQUEST = 'ranking/FETCH_RANKING_REQUEST',
    FETCH_RANKING_SUCCESS = 'ranking/FETCH_RANKING_SUCCESS',
    FETCH_RANKING_FAILURE = 'ranking/FETCH_RANKING_FAILURE',

    SET_RANKING = 'ranking/SET_RANKING',
    SET_RANKING_ENTRIES = 'ranking/SET_RANKING_ENTRIES',

    POPULATE_RANKING = 'PartnerPortalModule/ranking/POPULATE_RANKING',
}