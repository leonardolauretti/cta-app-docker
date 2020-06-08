import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import LessonDetails from './components/LessonDetails';
import LessonsListing from './components/Listing';

import digital_content from 'src/assets/content.json';
import { groupBy } from 'lodash';

function normalize(str: string) {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

function slug(str: string) {
    str = normalize(str);
    str = str.toLowerCase();
    str = str.replace(/\s/g, '-');
    return str;
}

function makeEmbedSrc(link: string) {
    link = link.replace('https://vimeo.com/', '');
    let videoId = link.split('/')[0];
    return (`https://player.vimeo.com/video/${videoId}`);
}

const lessons = digital_content.map(lesson => {
    return {
        id: slug(lesson.title),
        src: makeEmbedSrc(lesson.link),
        ...lesson,
    };
});

const chaptersObject = groupBy(lessons, 'chapter');
const keys = Object.keys(chaptersObject);

const chapters = keys.map(key => {
    return {
        id: slug(key),
        title: key,
        lessons: chaptersObject[key],
    };
});

const useStyles = makeStyles((theme: any) => ({

    root: {},

    embedContainer: {
        position: 'relative',
        paddingBottom: '56.25%',
        height: 0,
        overflow: 'hidden',
        maxWidth: '100%',

        '& iframe, & object, & embed': {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
        },
    },

    title_overline: {
        color: 'white',
        lineHeight: 'inherit',
    },

    title_main: {
        textTransform: 'uppercase',
        fontSize: '2rem',
        fontWeight: 600,
        letterSpacing: '0.15rem',
    },
}));

export default function(props) {
    const classes = useStyles(props);
    const [activeLessonId, setActiveLessonId] = useState('aula-1---introducao');

    let activeLesson = lessons.find(lesson => lesson.id === activeLessonId);

    function handleLessonClick(id: string) {
        setActiveLessonId(id);
    }

    function renderPlayer() {
        if (!activeLessonId) {
            return null;
        }

        if (!activeLesson) {
            return null;
        }

        let src = activeLesson.src;

        return (
            <div className={classes.embedContainer}>
                <iframe src={src} frameBorder='0' allowFullScreen></iframe>
            </div>
        );
    }

    function renderLessonDetails() {
        if (!activeLessonId) {
            return null;
        }

        if (!activeLesson) {
            return null;
        }

        return (
            <LessonDetails lesson={activeLesson} />
        );
    }

    return (
        <div className={classes.root}>

            <Container maxWidth="lg" style={{ padding: 12 }}>
                <Grid container spacing={3}>

                    <Grid item xs={12}>
                        <Typography className={classes.title_overline} variant="overline" display="block">
                            Conteúdo complementar
                        </Typography>
                        <Typography className={classes.title_main} variant="h3" display="block" gutterBottom>
                            Fontes chaveadas
                        </Typography>
                    </Grid>

                </Grid>
            </Container>

            <Container maxWidth="lg" style={{ padding: 12 }}>
                <Grid container spacing={3}>

                    <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>

                        <Grid container spacing={3}>

                            <Grid item xs={12}>
                                {renderPlayer()}
                            </Grid>

                            <Grid item xs={12}>
                                {renderLessonDetails()}
                            </Grid>

                        </Grid>

                    </Grid>

                    <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                        <LessonsListing chapters={chapters} onLessonClick={handleLessonClick} />
                    </Grid>
                </Grid>
            </Container>

        </div>
    );
}