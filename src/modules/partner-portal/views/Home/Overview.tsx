import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Jumbotron from './components/Jumbotron';
import Stats from './components/Stats';
import { Typography } from '@material-ui/core';
import SectionTitle from './components/SectionTitle';
import NewsEntry from './components/NewsEntry';
import { useInfo } from 'src/modules/partner-portal/components/useInfo';

const useStyles = makeStyles((theme: any) => ({
    root: {},
    newsSection: {
        marginTop: '48px',
    },
    newsContent: {
        marginTop: '30px',
    },
}));

export default function(props) {
    const classes = useStyles(props);
    const info = useInfo();

    function renderNewsEntry({ title, description, link }) {
        return (
            <NewsEntry
                key={link}
                postTitle={title}
                postContent={description}
                postLink={link}
            />
        );
    }

    return (
        <div className={classes.root}>
            <Container maxWidth="lg">
                <Jumbotron />
                <Stats status={info.status} busy={info.busy} />
                <div className={classes.newsSection}>
                    <SectionTitle />
                    <div className={classes.newsContent}>
                        { info.news.map(renderNewsEntry) }
                    </div>
                </div>
            </Container>
        </div>
    );
}