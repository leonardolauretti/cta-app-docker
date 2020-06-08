import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme: any) => ({
    root: {
        minWidth: '36px',
        textAlign: 'center',
    },

    position: {
        fontWeight: 'bold',
        color: '#616161',
    },
}));

export default function(props) {

    const classes = useStyles(props);
    const { children } = props;

    return (
        <div className={classes.root}>
            <Typography className={classes.position}>{children}</Typography>
        </div>
    );
}