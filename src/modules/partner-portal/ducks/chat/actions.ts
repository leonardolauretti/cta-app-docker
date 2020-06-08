import { ActionTypes } from './types';

interface SendMessageData {
    chatId: string;
    content: string;
};

export const sendMessageAction = (data: SendMessageData) => ({
    type: ActionTypes.SEND_MESSAGE,
    payload: data,
});

export const fetchProfiles = () => ({
    type: ActionTypes.FETCH_PROFILES_REQUEST,
});

export const fetchChatsAction = () => ({
    type: ActionTypes.FETCH_CHATS_REQUEST,
});