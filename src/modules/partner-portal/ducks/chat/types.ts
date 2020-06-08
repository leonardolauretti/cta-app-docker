export enum ActionTypes {
    FETCH_CHATS_REQUEST = 'FETCH_CHATS_REQUEST',
    FETCH_CHATS_SUCCESS = 'FETCH_CHATS_SUCCESS',
    FETCH_CHATS_FAILURE = 'FETCH_CHATS_FAILURE',

    SEND_MESSAGE = 'SEND_MESSAGE',
    RECEIVE_MESSAGE = 'RECEIVE_MESSAGE',

    FETCH_PROFILES_REQUEST = 'chat/FETCH_PROFILES_REQUEST',
    FETCH_PROFILES_SUCCESS = 'chat/FETCH_PROFILES_SUCCESS',
    FETCH_PROFILES_FAILURE = 'chat/FETCH_PROFILES_FAILURE',

    SET_PROFILES = 'chat/SET_PROFILES',
    PUSH_PROFILE = 'chat/PUSH_PROFILE',

    SET_CHATS = 'chat/SET_CHATS',
    PUSH_CHAT = 'chat/PUSH_CHAT',
    MERGE_CHATS = 'chat/MERGE_CHATS',

    SET_MESSAGES = 'chat/SET_MESSAGES',
    PUSH_MESSAGE = 'chat/PUSH_MESSAGE',

    SET_CONTROLLED_PROFILES = 'chat/SET_CONTROLLED_PROFILES',
    SET_ACTIVE_PROFILE = 'chat/SET_ACTIVE_PROFILE',
};

export interface IState {

    activeProfileId: string;

    controlledProfiles: {
        byId: {
            [profileId: string]: {
                display_name: string;
                avatar_url: string;
                chats: string[];
            };
        };
        allIds: string[];
    };

    profiles: {
        byId: {
            [profileId: string]: {
                display_name: string;
                avatar_url?: string;
                status?: string;
            },
        },
        allIds: string[];
    },

    chats: {
        byId: {
            [chatId: string]: {
                title: string;
                created_by: string;
                messages: string[];
            };
        };
        allIds: string[];
    };

    messages: {
        byId: {
            [messageId: string]: {
                chat: string;
                content: string;
                delivered_to: string[];
                read_by: string[];
                created_at: string;
            };
        };
        allIds: string[];
    };
};