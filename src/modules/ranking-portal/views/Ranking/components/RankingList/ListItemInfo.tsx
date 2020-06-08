import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

interface IProps {
    primary?: string;
    secondary?: string;
};

const useStyles = makeStyles((theme: any) => ({

    root: {
        padding: '9px 0',
    },

    textPrimary: {
        color: '#475361',
        fontWeight: 'bold',
    },

    textSecondary: {
        color: '#616161',
        fontSize: '15px',
    },
}));

export default function(props: IProps) {

    const classes = useStyles(props);
    const { primary, secondary } = props;

    return (
        <div className={classes.root}>
            <Typography variant="body1" className={classes.textPrimary}>{primary}</Typography>
            <Typography variant="caption" className={classes.textSecondary}>{secondary}</Typography>
        </div>
    );
}