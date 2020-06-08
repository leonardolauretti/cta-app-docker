import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import { Typography, LinearProgress } from '@material-ui/core';
import UploadButton from './UploadButton';

interface IProps {
    busy?: boolean;
    avatar_url: string;
    first_name: string;
    last_name: string;
    city: string;
    state: string;
    country: string;
    onAvatarUpdate?: (file: File) => void;
    onAvatarDelete?: () => void;
}

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

export default function(props: IProps) {
    const classes = useStyles(props);
    const { busy, avatar_url, city, state, country, first_name, last_name } = props;

    function renderInformation() {

        if (!first_name && !last_name) {
            return null;
        }

        return (
            <React.Fragment>
                <Typography variant="h4">
                    {first_name + ' ' + last_name}
                </Typography>
                { city && state ? <Typography variant="body1" color="textSecondary">{city}, {state}</Typography> : null }
                { country ? <Typography variant="body1" color="textSecondary">{country}</Typography> : null }
            </React.Fragment>
        );
    }

    return (
        <div className={classes.root}>
            <Card className={classes.card}>
                <CardContent>
                    <Avatar className={classes.avatar} src={avatar_url} />
                    { renderInformation() }
                </CardContent>
                { busy ? <LinearProgress /> : null }
                <Divider />
                <CardActions>
                    <UploadButton 
                        busy={busy}
                        onSelect={props.onAvatarUpdate}
                    />
                    <Button
                        fullWidth
                        disabled={busy}
                        onClick={props.onAvatarDelete}
                    >
                        Remover Foto
                    </Button>
                </CardActions>
            </Card>
        </div>
    );
}