import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import SendIcon from '@material-ui/icons/Send';
import Input from '@material-ui/core/Input';

interface IProps {
    onSubmit: (message: string) => void;
}

const useStyles = makeStyles((theme: any) => ({
    root: {
        width: '100%',
    },
    field: {
        flexGrow: 1,
    },
}));

export default function(props) {
    const classes = useStyles(props);
    const [message, setMessage] = useState('');

    function onMessageSubmit(){
        setMessage('');
        props.onSubmit(message);
    }

    return (
        <div className={classes.root}>
            <Toolbar>
                <div className={classes.field}>
                    <TextField
                        type="text"
                        name="message"
                        placeholder="Digite sua mensagem..."
                        fullWidth={true}
                        variant="outlined"
                        value={message}
                        onChange={(event) => setMessage(event.currentTarget.value)}
                    />
                </div>
                <IconButton color="primary" onClick={() => onMessageSubmit()}>
                    <SendIcon />
                </IconButton>
            </Toolbar>
        </div>
    );
}