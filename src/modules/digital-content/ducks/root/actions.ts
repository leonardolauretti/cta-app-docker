import { ActionTypes } from './types';

export const authenticateAction = (values) => {
    return {
        type: ActionTypes.AUTHENTICATE_REQUEST,
        payload: values,
    };
}