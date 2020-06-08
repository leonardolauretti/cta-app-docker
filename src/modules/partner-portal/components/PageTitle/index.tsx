import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

interface IProps {
    title: string;
    subtitle?: string;
}

const useStyles = makeStyles((theme) => ({
    
    root: {},
}));

export default function(props: IProps) {

    const classes = useStyles(props);
    const { title, subtitle } = props;

    function renderSubtitle() {
        return (
            <Typography variant="overline" component="h2">
                {subtitle}
            </Typography>
        );
    }

    function renderTitle() {
        return (
            <Typography variant="h3" component="h1">
                {title}
            </Typography>
        );
    }

    return (
        <div className={classes.root}>
            {props.subtitle && renderSubtitle()}
            {props.title && renderTitle()}
        </div>
    );
}