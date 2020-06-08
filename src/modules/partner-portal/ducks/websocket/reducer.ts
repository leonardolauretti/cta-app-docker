import { ActionTypes } from './types';

export default function(state, action) {
    switch (action.type) {

        case ActionTypes.WEBSOCKET_CONNECTED:
            console.log('WEBSOCET_CONNECTED');
            return { ...state };

        default:
            return { ...state };
    }
}