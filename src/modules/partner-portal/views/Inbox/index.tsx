import React from 'react';
import { ChatProvider } from 'src/modules/partner-portal/components/useChat';
import InboxList from './components/InboxList';
import ChatArea from './components/ChatArea';
import Alert from './alert';

export default function() {
    const enable = false;

    if (!enable) {
        return (<Alert />);
    }

    return (
        <ChatProvider>
            <InboxList />
            <ChatArea onMessageSubmit={() => {}} />
        </ChatProvider>
    );
}