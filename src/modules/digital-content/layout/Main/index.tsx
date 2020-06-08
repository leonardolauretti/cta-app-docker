import React from 'react';
import { makeStyles, ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../../theme';

import Header from './components/Header';
import Footer from './components/Footer';

import 'src/assets/styles/styles.scss';
import background_src from 'src/assets/img/instructiva/background.png';

const useStyles = makeStyles(() => ({
    '@global': {
        'body': {
            backgroundImage: `url(${background_src})`,
            backgroundSize: 'cover',
            backgroundAttachment: 'fixed',
        },
    },
    root: {
        display: 'flex',
        flexFlow: 'column',
        height: '100%',
        overflow: 'visible',
    },
    header: {
        flex: '0 1 auto',
    },
    content: {
        flex: '1 1 auto',
    },
    footer: {
        flex: '0 1 120px',
    },
}));

export default function Minimal(props) {
    const { children } = props;

    const classes = useStyles(props);

    return (
        <div className={classes.root}>
            <CssBaseline />
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
            <ThemeProvider theme={theme}>
                <div className={classes.header}><Header /></div>
                <div className={classes.content}>{children}</div>
                <div className={classes.footer}><Footer /></div>
            </ThemeProvider>
        </div>
    );
}