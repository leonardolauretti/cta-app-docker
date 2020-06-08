import { IState, ActionTypes } from './types';

const initialState: IState = {
    chats: {
        byId: {},
    },
    busy: false,
};

export default function(state = initialState, action) {
    switch (action.type) {

        case ActionTypes.SET_BUSY:
            return { ...state, busy: action.payload };
        
        case ActionTypes.SET_CHATS:
            return handleSetChats(state, action);

        default:
            return { ...state };
    }
}

function handleSetChats(state, action) {
    const chats = action.payload;
    const chatsById = {};

    chats.map((chat) => {
        chatsById[chat.id] = chat;
    });

    return {
        ...state,
        chats: { byId: chatsById },
    };
}