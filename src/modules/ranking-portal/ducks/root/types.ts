export enum ActionTypes {
    FETCH_RANKING_REQUEST = 'RankingPortalModule/root/FETCH_RANKING_REQUEST',
    FETCH_RANKING_SUCCESS = 'RankingPortalModule/root/FETCH_RANKING_SUCCESS',
    FETCH_RANKING_FAILURE = 'RankingPortalModule/root/FETCH_RANKING_FAILURE',

    SET_ENTRIES = 'RankingPortalModule/root/SET_ENTRIES',
    SET_RANKING = 'RankingPortalModule/root/SET_RANKING',
    POPULATE_RANKING = 'RankingPortalModule/root/POPULATE_RANKING',
}

interface Entry {
    id: string;
    first_name: string;
    last_name: string;
    neighborhood: string;
    city: string;
    state: string;
    country: string;
    avatar_url: string;
    ranking: string;
    performance: number;
    professional_availability: boolean;
}

interface Ranking {
    key: string;
    entries: string[];
    created: string;
}

export interface IState {

    rankings: {
        byKey: { [key: string]: Ranking };
        allKeys: string[];
    };

    entries: {
        byId: { [id: string]: Entry };
        allIds: string[];
    };

    $loading: any;
}