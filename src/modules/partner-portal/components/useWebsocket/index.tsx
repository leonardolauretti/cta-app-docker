import React, { useState, useEffect, useContext, createContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { signInAction, signoutAction } from 'src/modules/partner-portal/ducks/auth/actions';
import { userSelector, tokenSelector } from 'src/modules/partner-portal/ducks/auth/selectors';
import socket from '../../ducks/websocket/websocket';

const websocketContext = createContext(null);

export function WebsocketProvider({ children }) {
    const websocket = useProvideWebsocket();
    return <websocketContext.Provider value={websocket}>{children}</websocketContext.Provider>
};

export const useWebsocket = () => {
    return useContext(websocketContext);
};

function useProvideWebsocket() {
    const dispatch = useDispatch();
    const [busy, setBusy] = useState(true);
    const [chats, setChats] = useState([]);
    const [activeChatId, setActiveChatId] = useState(null);

    useEffect(() => {
        socket.on('connect', () => {
            console.log('Connected');
            setBusy(false);
        });
    }, []);

    const selectChat = (chatId: string) => {
        setActiveChatId(chatId);
    };

    const sendMessage = () => {

    };

    const fireTyping = () => {};

    return {
        busy,
        selectChat,
        sendMessage,
        fireTyping,
    };
};