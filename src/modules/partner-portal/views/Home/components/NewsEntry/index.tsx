import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

interface IProps {
    postTitle?: string;
    postContent?: string;
    postLink?: string;
}

const useStyles = makeStyles((theme: any) => ({
    root: {
        marginBottom: theme.spacing(2),
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    paper: {
        padding: theme.spacing(3, 2),
    },
    button: {
        marginLeft: 'auto',
    },
}));

export default function(props: IProps) {
    const classes = useStyles(props);
    const { postTitle, postContent, postLink } = props;

    return (
        <div className={classes.root}>
            <Grid xs={9}>
                <Typography variant="h6" component="h6">{postTitle}</Typography>
                <Typography variant="body1">{postContent}</Typography>
            </Grid>
            <Button
                className={classes.button}
                href={postLink}
                target="_blank"
            >Ler mais</Button>
        </div>
    );
}