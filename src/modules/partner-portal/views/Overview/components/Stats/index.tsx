import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import LinearProgress from '@material-ui/core/LinearProgress';

interface IProps {
    busy: boolean;
    status: {
        course_name: string,
        count: number,
    }[];
}

const useStyles = makeStyles((theme: any) => ({
    root: {},

    statItem: {
        textAlign: 'center',
        padding: theme.spacing(2, 2),
        borderRight: '1px solid #eeeeee',
        flexGrow: 1,
        '&:last-child': {
            borderRight: 'none',
        },
    },

    loader: {
        maxWidth: '300px',
    },
}));

export default function(props: IProps) {
    const classes = useStyles(props);
    const { busy, status } = props;

    function renderStatus({ course_name, count }) {
        return (
            <Grid className={classes.statItem} key={course_name}>
                <Typography component="h2" variant="h2">{count}</Typography>
                <Typography component="p" variant="overline">estudantes no {course_name}</Typography>
            </Grid>
        );
    }

    function renderLoader() {
        return (
            <div className={classes.loader}>
                <Typography variant="h5">
                    Carregando estatísticas...
                </Typography>
                <LinearProgress />
            </div>
        );
    }

    return (
        <Paper>
            <Grid
                container
                direction="row"
                //justify="center"
                //alignItems="center"
            >
                {busy ? renderLoader() : status.map(renderStatus)}
            </Grid>
        </Paper>
    );
}