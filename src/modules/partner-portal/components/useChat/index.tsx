import React, { useState, useEffect, useContext, createContext } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import {
    fetchChatsAction,
} from 'src/modules/partner-portal/ducks/chat/actions';
import {
    chatsSelector,
    chatSelector,
} from 'src/modules/partner-portal/ducks/chat/selectors';

const chatContext = createContext(null);

export function ChatProvider({ children }) {
    const chat = useProvideChat();
    return <chatContext.Provider value={chat}>{children}</chatContext.Provider>
};

export const useChat = () => {
    return useContext(chatContext);
};

function useProvideChat() {
    const dispatch = useDispatch();
    const chats = useSelector(chatsSelector);
    const [busy, setBusy] = useState(false);
    const [activeChatId, setActiveChatId] = useState(null);
    const [activeChat, setActiveChat] = useState(null);

    useEffect(() => {
        setBusy(false);
    }, [chats]);

    useEffect(() => {
        let chat = useSelector(chatSelector(activeChatId));
        setActiveChat(chat);
    }, [activeChatId]);

    useEffect(() => {
        setBusy(true);
        dispatch(fetchChatsAction());
    }, []);

    return {
        busy,
        chats,
        activeChatId,
        setActiveChatId,
    };
};