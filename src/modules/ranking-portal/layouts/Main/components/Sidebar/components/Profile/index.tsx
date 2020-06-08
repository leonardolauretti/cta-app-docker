import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar, Typography } from '@material-ui/core';
import { useLayout } from 'src/modules/partner-portal/components/useLayout';

interface IProps {
    className?: string;
}

const useStyles = makeStyles((theme: any) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: 'fit-content',
    },

    avatar: {
        width: 60,
        height: 60,
    },

    name: {
        marginTop: theme.spacing(1),
    },
}));

export default function(props: IProps) {
    const { className, ...rest } = props;
    const layout = useLayout();
    const classes = useStyles(props);

    return (
        <div
            {...rest}
            className={clsx(classes.root, className)}
        >
            <Avatar
                alt="Person"
                className={classes.avatar}
                component={RouterLink}
                src={layout.avatar_url}
                to="/partner-portal/account"
            />
            <Typography
                className={classes.name}
                variant="h4"
            >
                {(layout.first_name + ' ' + layout.last_name) || 'full_name'}
            </Typography>
            <Typography variant="body2">{layout.bio || 'bio'}</Typography>
        </div>
    );
};