import { ActionTypes } from './types';

export const sendMessageAction = (payload) => ({
    type: ActionTypes.WEBSOCKET_CHAT_SEND,
    payload,
});