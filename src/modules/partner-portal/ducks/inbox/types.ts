export interface IState {
    busy: boolean;
    chats: {
        byId: {
            [id: string]: Chat;
        };
    };
}

export interface Participant {}

export interface Message {
    id: string;
    author: Participant;
    content: string;
    created: string;
    updated: string;
}

export interface Chat {
    id: string;
    participants: Participant[];
    messages: Message[];
    created: string;
    updated: string;
}

export enum ActionTypes {
    SEND_MESSAGE = 'chat#SEND_MESSAGE',
    RECEIVE_MESSAGE = 'chat#RECEIVE_MESSAGE',

    FETCH_INBOX_REQUEST = 'FETCH_INBOX_REQUEST',
    FETCH_INBOX_SUCCESS = 'FETCH_INBOX_SUCCESS',
    FETCH_INBOX_FAILURE = 'FETCH_INBOX_FAILURE',

    SET_CHATS = 'SET_CHATS',
    PUSH_CHAT = 'PUSH_CHAT',

    SET_BUSY = 'SET_BUSY',
}