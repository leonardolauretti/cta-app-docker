import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

interface IProps {
    id?: string;
    title: string;
    preview: string;
    href: string;
}

const useStyles = makeStyles((theme: any) => ({
    root: {
        marginBottom: theme.spacing(2),
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        // padding: '12px',
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
    const { title, preview, href } = props;

    return (
        <div className={classes.root}>
            <Grid container spacing={3} direction="row" justify="space-between" alignItems="flex-end">

                <Grid item xs={12} sm={12} md={9} lg={9} xl={9}>
                    <Typography variant="h6" component="h6">{title}</Typography>
                    <Typography variant="body1">{preview}</Typography>
                </Grid>

                <Grid item xs={12} sm={12} md={3} lg={3} xl={3} style={{ display: 'flex' }}>
                    <Button
                        className={classes.button}
                        href={href}
                        target="_blank"
                    >
                        Leia mais
                    </Button>
                </Grid>
            </Grid>
        </div>
    );
}