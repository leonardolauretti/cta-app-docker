import { ActionTypes, IState } from './types';

const initialState: IState = {

    user: {
        first_name: '',
        last_name: '',
        email: '',
        avatar_url: '',
        token: '',
        $authenticated: false,
    },

    $error: {},
    $loading: {},
};

export default function(state = initialState, action) {
    switch (action.type) {

        case ActionTypes.SET_USER:
            return { ...state, user: { ...state.user, ...action.payload } };

        case ActionTypes.SET_TOKEN:
            return { ...state, user: { ...state.user, token: action.payload } };

        case ActionTypes.SET_AUTHENTICATED:
            return { ...state, user: { ...state.user, $authenticated: action.payload } };

        case ActionTypes.SET_AVATAR_URL:
            return { ...state, user: { ...state.user, avatar_url: action.payload } };

        default:
            return loadingReducer(state, action);
    }
};

function loadingReducer(state = initialState, action) {
    const { type } = action;
    const matches = /(.*)_(REQUEST|SUCCESS|FAILURE)/.exec(type);

    // not a *_REQUEST / *_SUCCESS /  *_FAILURE actions, so we ignore them
    if (!matches) return state;

    const [, requestName, requestState] = matches;
    return {
        ...state,
        // Store whether a request is happening at the moment or not
        // e.g. will be true when receiving GET_TODOS_REQUEST
        //      and false when receiving GET_TODOS_SUCCESS / GET_TODOS_FAILURE
        $error: {
            ...state.$error,
            [requestName]: requestState === 'FAILURE' ? action.payload : false,
        },
        $loading: {
            ...state.$loading,
            [requestName]: requestState === 'REQUEST',
        },
    };
}