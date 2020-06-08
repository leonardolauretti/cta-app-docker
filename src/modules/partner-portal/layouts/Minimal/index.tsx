import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Topbar from './components/Topbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';
import theme from '../../theme';
import '../../assets/styles.scss';

const useStyles = makeStyles(() => ({
    root: {
        paddingTop: 64,
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
        <div className={classes.root}>
            <CssBaseline />
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
            <ThemeProvider theme={theme}>
                <Topbar />
                <main className={classes.content}>{children}</main>
            </ThemeProvider>
        </div>
    );
}