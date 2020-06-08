import React from 'react';
import { makeStyles, ThemeProvider } from '@material-ui/styles';
import Topbar from './components/Topbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../../theme';
import '../../assets/styles.scss';

import { LayoutProvider, useLayout } from '../../components/useLayout';
import Content from './components/Content';

const useStyles = makeStyles(() => ({
    root: {
        paddingTop: 119,
        height: '100%'
    },
    content: {
        height: '100%'
    },
}));

export default function Minimal(props) {

    const { children } = props;
    const classes = useStyles(props);

    return (
        <LayoutProvider>
            <div className={classes.root}>
                <CssBaseline />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
                <ThemeProvider theme={theme}>
                    <Topbar />
                    <Content />
                    <main className={classes.content}>{children}</main>
                </ThemeProvider>
            </div>
        </LayoutProvider>
    );
}