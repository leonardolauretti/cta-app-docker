import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';

import SectionTitle from './SectionTitle';
import Entry from './Entry';

interface NewsEntry {
    id?: string;
    title: string;
    preview: string;
    href: string;
}

interface IProps {
    busy?: boolean;
    entries: NewsEntry[];
}

const useStyles = makeStyles((theme: any) => ({

    root: {},

    news: {},

    loader: {
        maxWidth: '300px',
    },
}));

export default function(props: IProps) {

    const classes = useStyles(props);
    const { busy, entries } = props;

    function renderEntry({ title, preview, href }) {
        return (<Entry key={href} title={title} preview={preview} href={href} />);
    }

    function renderNews() {
        return (
            <div className={classes.news}>
                {entries.map(entry => renderEntry(entry))}
            </div>
        );
    }

    function renderLoader() {
        return (
            <div className={classes.loader}>
                <Typography variant="h5">
                    Carregando notícias...
                </Typography>
                <LinearProgress />
            </div>
        );
    }

    return (
        <div className={classes.root}>
            <Grid container spacing={3} justify="center" alignItems="center">
                <Grid item>
                    {busy ? renderLoader() : renderNews()}
                </Grid>
            </Grid>
        </div>
    );
}