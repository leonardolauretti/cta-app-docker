import React from 'react';
import { useChat } from 'src/modules/partner-portal/components/useChat';
import InboxList from '../InboxList';
import ChatArea from '../ChatArea';

export default function(props) {

    let chat = useChat();

    return (
        <React.Fragment>
            <InboxList 
                busy={chat.busy}
                chats={chat.chats}
                onChatClick={(id) => console.log(id)}
            />
            <ChatArea 
                busy={chat.busy}
                chats={chat.chats}
                activeChatId={chat.activeChatId}
                onMessageSubmit={(message) => console.log(message)}
            />
        </React.Fragment>
    );
}