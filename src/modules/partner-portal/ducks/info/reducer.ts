import { ActionTypes } from './types';

const initialState = {
    news: [],
    status: [],
};

export default function(state = initialState, action) {
    switch (action.type) {

        case ActionTypes.SET_NEWS:
            return setNews(state, action);

        case ActionTypes.SET_STATUS:
            return setStatus(state, action);

        default:
            return { ...state };
    }
}

function setNews(state, action) {
    return {
        ...state,
        news: action.payload,
    };
}

function setStatus(state, action) {
    return {
        ...state,
        status: action.payload,
    };
}