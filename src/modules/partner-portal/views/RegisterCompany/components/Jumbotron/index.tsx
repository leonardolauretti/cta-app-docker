import React from 'react';
import { useStyles } from './styles';

interface IProps {}

export default function(props: IProps) {
    const classes = useStyles(props);

    return (
        <div className={classes.root}>

        </div>
    );
}