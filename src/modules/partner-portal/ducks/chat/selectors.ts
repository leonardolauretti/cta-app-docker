import { IState } from './types';

export const messagesSelector = (chatId: string) => {
    return (state) => {
        const messages = state['partner-portal-module'].chat.chats.byId[chatId].messages;
        return messages;
    };
};

export const activeProfileIdSelector = (state) => {
    let chatState: IState = state['partner-portal-module'].chat;
    return chatState.activeProfileId;
}

/*export const chatsSelector = (state) => {
    let chatState: IState = state['partner-portal-module'].chat;

    let activeProfileId = chatState.activeProfileId;

    if (!activeProfileId) {
        console.log('Nenhum perfil de chat selecionado');
        return [];
    }

    if (!chatState.controlledProfiles.allIds.includes(activeProfileId)) {
        console.log('Perfil de chat não existe');
        return [];
    }

    let activeProfile = chatState.controlledProfiles.byId[activeProfileId];

    let chatsIds = activeProfile.chats;

    let profileChats = chatsIds.map((chatId) => {
        return chatState.chats.byId[chatId];
    });

    return profileChats;
}*/

export const chatsSelector = (state) => {
    let allIds = state['partner-portal-module'].chat.chats.allIds;
    if (!allIds) {
        return [];
    } else {
        return allIds;
    }
}

export const chatSelector = (chatId: string) => {
    return (state) => {
        
        if (chatId === null) {
            return null;
        }
        
        let chatState = state['partner-portal-module'].chat;
        let chat = chatState.chats.byId[chatId];
        return chat;
    };
}