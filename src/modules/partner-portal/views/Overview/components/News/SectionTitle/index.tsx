import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme: any) => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '16px',
        justifyContent: 'space-between',

        '& h5': {
            position: 'relative',
        },

        '& h5:before': {
            left: 0,
            width: '75%',
            bottom: '-8px',
            height: '3px',
            content: '" "',
            position: 'absolute',
            backgroundColor: '#3f51b5',
        },
    },
}));

export default function(props) {
    const classes = useStyles(props);

    return (
        <div className={classes.root}>
            <Typography variant="overline">{props.children}</Typography>
        </div>
    );
}