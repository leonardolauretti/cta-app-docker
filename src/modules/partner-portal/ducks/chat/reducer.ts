import { IState, ActionTypes } from './types';

const initialState: IState = {
    activeProfileId: '1b2b3',
    controlledProfiles: {
        byId: {},
        allIds: [],
    },
    profiles: {
        byId: {},
        allIds: [],
    },
    chats: {
        byId: {},
        allIds: [],
    },
    messages: {
        byId: {},
        allIds: [],
    },
};

export default function(state: IState = initialState, action) {
    switch (action.type) {

        case ActionTypes.SET_PROFILES:
            return handleSetProfiles(state, action);

        case ActionTypes.PUSH_PROFILE:
            return handlePushProfile(state, action);

        case ActionTypes.SET_CHATS:
            return handleSetChats(state, action);

        case ActionTypes.PUSH_CHAT:
            return handlePushChat(state, action);

        case ActionTypes.SET_MESSAGES:
            return handleSetMessages(state, action);

        case ActionTypes.PUSH_MESSAGE:
            return handlePushMessage(state, action);

        case ActionTypes.SET_CONTROLLED_PROFILES:
            return { ...state, controlledProfiles: action.payload };

        case ActionTypes.SET_ACTIVE_PROFILE:
            return { ...state, activeProfile: action.payload }
    
        default:
            return { ...state };
    }
}

function handleSetProfiles(state: IState, action) {}

function handlePushProfile(state: IState, action) {}

function handleSetChats(state: IState, action) {}

function handlePushChat(state: IState, action) {
    let { profileId, chat } = action.payload;

    let chatIds = [ ...state.chats.allIds ];
    let chatsById = { ...state.chats.byId };

    let chatExists = chatIds.includes(chat.id);

    if (!chatExists) {
        chatIds.push(chat.id);
    }

    chatsById[chat.id] = chat;
    
    return {
        ...state,
        chats: {
            ...state.chats,
            byId: chatsById,
            allIds: chatIds,
        },
    };
}

function handleSetMessages(state: IState, action) {}

function handlePushMessage(state: IState, action) {}