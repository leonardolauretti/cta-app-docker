import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';
import theme from '../../theme';
import '../../assets/styles.scss';
import Topbar from './components/Topbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Snackbar from './components/Snackbar';

interface IProps {
    children: any;
    notifications: Notification[];
    dismissNotification: (index: number) => void;
}

const useStyles = makeStyles((theme: any) => ({
    root: {
        paddingTop: 64,
        height: '100%',
        [theme.breakpoints.up('sm')]: {
            //paddingTop: 64
            paddingTop: 64
        },
        display: 'flex',
        flexDirection: 'column',
    },
    shiftContent: {
        paddingLeft: 240
    },
    content: {
        flexGrow: 1,
    }
}));

export default function MainLayout(props: IProps) {
    const classes = useStyles(props);
    const [openSidebar, setOpenSidebar] = useState(false);
    const { children } = props;

    const isDesktop = useMediaQuery(theme.breakpoints.up('lg'), {
        defaultMatches: true
    });

    function handleSidebarOpen() {
        setOpenSidebar(true);
    };

    const handleSidebarClose = () => {
        setOpenSidebar(false);
    };

    const shouldOpenSidebar = isDesktop ? true : openSidebar;

    return (
        <div
            className={clsx({
                [classes.root]: true,
                [classes.shiftContent]: isDesktop,
            })}
        >
            <CssBaseline />
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
            <ThemeProvider theme={theme}>
                <Topbar onSidebarOpen={handleSidebarOpen} />
                <Sidebar
                    onClose={handleSidebarClose}
                    open={shouldOpenSidebar}
                    variant={isDesktop ? 'persistent' : 'temporary'}
                />
                <main className={classes.content}>
                    {children}
                </main>
                <Footer />
                <Snackbar
                    notifications={[]}
                    dismissNotification={() => {}}
                />
            </ThemeProvider>
        </div>
    );
};