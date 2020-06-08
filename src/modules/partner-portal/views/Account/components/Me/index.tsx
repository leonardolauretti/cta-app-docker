import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import { Typography, CircularProgress } from '@material-ui/core';
import UploadComponent from './UploadComponent';
import { useAccount } from 'src/modules/partner-portal/components/useAccount';

const useStyles = makeStyles((theme: any) => ({
    root: {},

    card: {
        textAlign: 'center',
        alignItems: 'center',
    },

    avatar: {
        width: '123px',
        height: '123px',
        margin: '0 auto',
        marginBottom: '12px',
    },
}));

export default function(props) {
    const classes = useStyles(props);
    const account = useAccount();
    const busy = true;

    return (
        <div className={classes.root}>
            <Card className={classes.card}>
                <CardContent>
                    {
                        busy
                        ? <CircularProgress />
                        : <Avatar className={classes.avatar} src={account.avatar_url} />
                    }
                    <Typography variant="h4">
                        {account.first_name + ' ' + account.last_name}
                    </Typography>
                    <Typography variant="body1" color="textSecondary">Sorocaba, SP</Typography>
                    <Typography variant="body1" color="textSecondary">Brasil</Typography>
                </CardContent>
                <Divider />
                <CardActions>
                    <UploadComponent />
                    <Button fullWidth>
                        Remover Foto
                    </Button>
                </CardActions>
            </Card>
        </div>
    );
}