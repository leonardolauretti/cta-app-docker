import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

interface Lesson {
    id: string;
    title: string;
    chapter: string;
    description: string;
}

interface IProps {
    lesson: Lesson;
}

const useStyles = makeStyles((theme: any) => ({
    root: {
        borderLeft: '6px solid',
        borderLeftColor: theme.palette.tulip_tree,
        padding: '12px',
        backgroundColor: 'rgba(240, 240, 240, 0.15)',
    },

    lesson_chapter: {
        //color: theme.palette.judge_gray,
        color: 'white',
        fontSize: '1rem',
        lineHeight: '1.66',
    },

    lesson_title: {
        color: theme.palette.tulip_tree,
        marginBottom: '1.35em',
    },

    lesson_description: {
        //color: theme.palette.judge_gray,
        color: 'white',
    },
}));

export default function PinnedSubheaderList(props: IProps) {
    const classes = useStyles();
    const { title, description, chapter } = props.lesson;

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>

                <Grid item>
                    <Typography className={classes.lesson_chapter} variant="overline">
                        {chapter}
                    </Typography>
                    <Typography className={classes.lesson_title} variant="h4" gutterBottom>
                        {title}
                    </Typography>
                    <Typography className={classes.lesson_description} variant="body1">
                        {description}
                    </Typography>
                </Grid>

            </Grid>
        </div>
    );
}