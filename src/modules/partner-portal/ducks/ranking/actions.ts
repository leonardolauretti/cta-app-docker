import { ActionTypes } from './types';

export const fetchRankingAction = () => {
    return {
        type: ActionTypes.FETCH_RANKING_REQUEST,
    };
};