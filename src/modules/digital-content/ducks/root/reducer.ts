import { ActionTypes } from './types';

const initialState = {
    access_code: null,
};

export default function(state, action) {
    switch (action.type) {

        case ActionTypes.SET_ACCESS_CODE:
            return { ...state, access_code: action.payload };

        default:
            return { ...state };
    }
}