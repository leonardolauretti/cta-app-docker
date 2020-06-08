import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import WorkIcon from '@material-ui/icons/Work';
import Chip from '@material-ui/core/Chip';
import LinearProgress from '@material-ui/core/LinearProgress';

interface IProps {
    performance?: number;
    style?: any;
}

const useStyles = makeStyles((theme: any) => ({
    root: {
        minWidth: '165px',
    },

    icon: {
        color: '#546e7a',
    },

    progress: {
        width: '100%',
        display: 'block',

        '& .MuiLinearProgress-barColorPrimary': {
            //backgroundColor: '#6bd7d7',
        },
    },

    text: {
        display: 'block',
    },
}));

export default function(props: IProps) {

    const classes = useStyles(props);
    const { performance, style } = props;

    function renderPerformance() {
        return (
            <div className={classes.root} style={style}>
                <Typography className={classes.text} variant="overline">
                    {`Aproveitamento ${performance}%`}
                </Typography>
                <LinearProgress className={classes.progress} variant="determinate" value={performance} />
            </div>
        );
    }

    return performance ? renderPerformance() : null;
}