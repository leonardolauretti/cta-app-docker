import { ActionTypes } from './types';

export const fetchNewsAction = () => {
    return {
        type: ActionTypes.FETCH_NEWS_REQUEST,
    };
};

export const fetchStatusAction = () => {
    return {
        type: ActionTypes.FETCH_STATUS_REQUEST,
    };
};