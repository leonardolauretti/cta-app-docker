import { ActionTypes, IState } from './types';

const initialState: IState = {
    busy: false,
    token: null,
    /*user: {
        first_name: null,
        last_name: null,
        email: null,
        avatar_url: null,
        token: null,
        $allow: false,
        $mounted: false,
    },*/
    user: {
        first_name: 'Leonardo',
        last_name: 'Lauretti',
        email: 'leonardolauretti@hotmail.com',
        avatar_url: null,
        token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU0MjAwMWQyLWY5MTgtNDA0OC04NDM0LWVlMzllZTM1ZDgyYSIsImlhdCI6MTU4MzI1OTE0MH0.RYTwM4HJUjS7MMGs07pHS3vqUZ8ykbo5sWX0GvelHf0',
        $allow: true,
        $mounted: true,
    },
    ui: {
        authenticateLoading: false,
        authenticateSuccess: false,
        authenticateError: false,
        registerLoading: false,
        registerSuccess: false,
        registerError: false,
    },
};

export default function(state = initialState, action) {
    switch (action.type) {

        case ActionTypes.REGISTER_REQUEST:
            return registerRequest(state, action);
        
        case ActionTypes.REGISTER_SUCCESS:
            return registerSuccess(state, action);

        case ActionTypes.REGISTER_FAILURE:
            return registerFailure(state, action);
        
        case ActionTypes.AUTHENTICATE_REQUEST:
            return authenticateRequest(state, action);

        case ActionTypes.AUTHENTICATE_SUCCESS:
            return authenticateSuccess(state, action);

        case ActionTypes.AUTHENTICATE_FAILURE:
            return authenticateFailure(state, action);

        case ActionTypes.MOUNT_USER:
            return mountUser(state, action);

        case ActionTypes.UNMOUNT_USER:
            return unmountUser(state, action);

        case ActionTypes.SET_USER:
            return { ...state, user: { ...state.user, ...action.payload } };

        case ActionTypes.SET_TOKEN:
            return { ...state, user: { ...state.user, token: action.payload } };

        case ActionTypes.SET_ALLOW:
            return { ...state, user: { ...state.user, $allow: action.payload } };

        case ActionTypes.SET_UI:
            return { ...state, ui: { ...state.ui, ...action.payload } };

        default:
            return { ...state };
    }
}

function registerRequest(state, action) {
    return {
        ...state,
        ui: {
            ...state.ui,
            registerLoading: true,
            registerSuccess: false,
            registerFailure: false,
        },
    };
}

function registerSuccess(state, action) {
    return {
        ...state,
        ui: {
            ...state.ui,
            registerLoading: false,
            registerSuccess: true,
            registerFailure: false,
        },
    };
}

function registerFailure(state, action) {
    return {
        ...state,
        ui: {
            ...state.ui,
            registerLoading: false,
            registerSuccess: false,
            registerFailure: true,
        },
    };
}

function authenticateRequest(state, action) {
    return {
        ...state,
        ui: {
            ...state.ui,
            authenticateLoading: true,
            authenticateSuccess: false,
            authenticateFailure: false,
        },
    };
}

function authenticateSuccess(state, action) {
    return {
        ...state,
        ui: {
            ...state.ui,
            authenticateLoading: false,
            authenticateSuccess: true,
            authenticateFailure: false,
        },
    };
}

function authenticateFailure(state, action) {
    return {
        ...state,
        ui: {
            ...state.ui,
            authenticateLoading: false,
            authenticateSuccess: false,
            authenticateFailure: true,
        },
    };
}

function mountUser(state, action) {
    return {
        ...state,
        user: {
            ...state.user,
            first_name: action.payload.first_name,
            last_name: action.payload.last_name,
            email: action.payload.email,
            avatar_url: action.payload.avatar_url,
            $allow: true,
            $mounted: true,
        },
    };
}

function unmountUser(state, action) {
    return {
        ...state,
        user: {
            ...state.user,
            first_name: null,
            last_name: null,
            email: null,
            avatar_url: null,
            token: null,
            $allow: false,
            $mounted: false,
        },
    }
}