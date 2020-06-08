import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Toolbar, TextField, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import InboxSearch from '../InboxSearch';

interface IChat {
    id: string;
}

interface IProps {
    busy?: boolean;
    chats: IChat[];
    onChatClick: (id: string) => void;
}

const useStyles = makeStyles((theme: any) => ({
    root: {
        borderRight: '1px solid #eeeeee',
        width: '300px',
        flexBasis: '300px',
        flexShrink: 0,
        backgroundColor: '#fff',
        height: '100%',
    },

    listItemTime: {
        display: 'flex',
        alignItems: 'flex-end',
        marginLeft: '16px',
        flexDirection: 'column',
    },
}));

export default function(props: IProps) {
    const classes = useStyles(props);
    const { busy, chats, onChatClick } = props;

    function renderChatItem(id: string) {
        return (
            <ListItem
                key={id}
                alignItems="center"
                button={true}
                divider={true}
                onClick={() => onChatClick(id)}
            >
                <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src="https://react-material-kit.devias.io/images/avatars/avatar_7.png" />
                </ListItemAvatar>
                <ListItemText
                    primary={
                        <Typography
                            component="span"
                            variant="h6"
                        >
                            Remy Sharp
                        </Typography>
                    }
                    secondaryTypographyProps={{ noWrap: true }}
                    secondary={
                        <React.Fragment>
                            Ali Connors {" — I'll be in your neighborhood doing errands this…"}
                        </React.Fragment>
                    }
                />
                <div className={classes.listItemTime}>
                    <Typography variant="body2" component="p" noWrap={true}>9:31 AM</Typography>
                </div>
            </ListItem>
        );
    }

    return (
        <div className={classes.root}>
            <InboxSearch />
            <Divider />
            <List
                disablePadding={true}
            >
                {chats.map((chat) => renderChatItem(chat.id))}
            </List>
        </div>
    );
}