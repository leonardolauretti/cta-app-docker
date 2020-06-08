import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Toolbar, TextField, IconButton, Divider, Avatar } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import MessageInput from './components/Input';

interface IProps {
    activeChatId: string;
    busy: boolean;
    chats: any;
    onMessageSubmit: (message: string) => void;
}

const useStyles = makeStyles((theme: any) => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexGrow: 1,
    },

    chatPlaceholderRoot: {
        textAlign: 'center',
        '& img': {
            maxWidth: '400px',
        },
    },

    chatAreaRoot: {
        display: 'flex',
        alignItems: 'flex-start',
        flexGrow: 1,
        flexDirection: 'column',
        backgroundColor: '#fff',
        height: '100%',
    },

    chatInfo: {},

    status: {
        display: 'flex',
        alignItems: 'center',
    },

    statusIndicator: {
        width: '6px',
        height: '6px',
        borderRadius: '50%',
        backgroundColor: 'green',
        marginRight: '9px',
    },

    messageRoot: {
        marginBottom: '16px',
    },

    message: {
        backgroundColor: '#f5f5f5',
        borderRadius: '4px',
        padding: theme.spacing(1, 2),
    },

    messages: {
        padding: theme.spacing(2, 2),
        width: '100%',
    },

    messageTop: {
        display: 'flex',
        flexDirection: 'row',
    },

    messageBottom: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
    }
}));

export default function(props: IProps) {
    const classes = useStyles(props);
    const {
        activeChatId,
        busy,
        chats,
        onMessageSubmit,
    } = props;

    useEffect(() => {
        console.log('activeChatId', activeChatId);
    }, [activeChatId]);

    function renderPlaceholder() {
        return (
            <div className={classes.chatPlaceholderRoot}>
                <img src={require('../../../../assets/img/work_chat.svg')} />
                <Typography variant="h4">Selecione uma conversa</Typography>
                <Typography variant="subtitle1" component="h6">Para iniciar uma conversa, clique no perfil de algum estudante</Typography>
            </div>
        );
    }

    function renderMessage(message: any) {
        console.log('Message', message);
        const { id, content } = message;
        return (
            <div key={id} className={classes.messageRoot}>
                <div className={classes.messageTop}>
                    <Avatar src="https://react-material-kit.devias.io/images/avatars/avatar_7.png" style={{ marginRight: '15px' }}/>
                    <div className={classes.message}>
                        <Typography variant="h6">Leonardo Lauretti</Typography>
                        <Typography variant="body1">{content}</Typography>
                    </div>
                </div>
                <div className={classes.messageBottom}>
                    <Typography variant="body2">9h23 PM</Typography>
                </div>
            </div>
        );
    }

    function renderMyMessage() {
        return (
            <div className={classes.messageRoot} style={{ textAlign: 'right' }}>
                <div className={classes.messageTop}>
                    <Avatar src="https://react-material-kit.devias.io/images/avatars/avatar_7.png" style={{ marginRight: '15px' }}/>
                    <div className={classes.message} style={{ color: '#FFFFFF', backgroundColor: '#3f51b5' }}>
                        <Typography variant="h6" style={{ color: '#FFFFFF' }}>Leonardo Lauretti</Typography>
                        <Typography variant="body1" style={{ color: '#FFFFFF' }}>Lorem ipsun sidero amet</Typography>
                    </div>
                </div>
                <div className={classes.messageBottom}>
                    <Typography variant="body2">9h23 PM</Typography>
                </div>
            </div>
        );
    }

    function renderChat(activeChat) {
        console.log('activeChat', activeChat);
        return (
            <div className={classes.chatAreaRoot}>
                <Toolbar variant="regular" style={{ width: '100%' }}>
                    <div className={classes.chatInfo}>
                        <Typography variant="h6">Leonardo Lauretti</Typography>
                        <div className={classes.status}>
                            <div className={classes.statusIndicator}></div>
                            <Typography variant="body2">Online</Typography>
                        </div>
                    </div>
                    <IconButton style={{ marginLeft: 'auto' }}>
                        <MoreVertIcon />
                    </IconButton>
                </Toolbar>
                <Divider style={{ width: '100%' }} />
                <div className={classes.messages}>
                    {activeChat.messages.map((message) => renderMessage(message))}
                </div>
                <Divider style={{ width: '100%' }} />
                <MessageInput
                    onSubmit={props.onMessageSubmit}
                />
            </div>
        );
    }

    if (activeChatId) {
        return (
            <div className={classes.root}>
                {renderChat(activeChatId)}
            </div>
        );
    } else {
        return (
            <div className={classes.root}>
                {renderPlaceholder()}
            </div>
        );
    }
}