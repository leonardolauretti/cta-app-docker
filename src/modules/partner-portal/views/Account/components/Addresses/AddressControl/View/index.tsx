import React from 'react';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import PinIcon from '@material-ui/icons/PinDrop';
import { makeStyles } from '@material-ui/styles';

interface IProps {
    address: {
        [key: string]: any;
    };
}

const useStyles = makeStyles((theme: any) => ({
    root: {},

    empty: {
        padding: '33px 0',
        textAlign: 'center',
    },

    emptyIcon: {
        fontSize: '66px',
    },
}));

export default function(props: IProps) {
    const classes = useStyles(props);
    const { address } = props;

    function empty() {
        return (
            <div className={classes.empty}>
                <PinIcon className={classes.emptyIcon}/>
                <Typography variant='h4'>
                    Endreço não cadastrado
                </Typography>
            </div>
        );
    }

    return (
        <div>
            {
                address
                ? 'View Mode'
                : empty()
            }
        </div>
    );
}