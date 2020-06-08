import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Hidden, IconButton, Badge } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined';
import InputIcon from '@material-ui/icons/Input';
import Tooltip from '@material-ui/core/Tooltip';
import cta_logo_src from 'src/assets/img/logo-cta-170px.png';
import { useLayout } from 'src/modules/partner-portal/components/useLayout';

interface IProps {
    onSidebarOpen: () => void;
    className?: string;
}

const useStyles = makeStyles((theme: any) => ({
    root: {
        boxShadow: 'none'
    },

    logo: {
        display: 'none',
        marginLeft: '12px',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },

    svgLogo: {
        display: 'block',
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
        '& svg': {
            display: 'block',
            height: '24px',
        },
        '& path': {
            fill: 'white'
        },
    },

    flexGrow: {
        flexGrow: 1
    },

    signOutButton: {
        marginLeft: theme.spacing(1)
    }
}));

export default function Topbar(props: IProps) {
    const { className, ...rest } = props;
    const layout = useLayout();
    const { onSidebarOpen } = props;

    const classes = useStyles(props);

    const notifications = [];

    return (
        <AppBar
            className={clsx(classes.root, className)}
            color="primary"
            position="fixed"
        >
            <Toolbar>
                <RouterLink to="/">
                    <img className={classes.logo} src={cta_logo_src} title="CTA Eletrônica" alt="CTA Eletrônica" />
                    <div className={classes.svgLogo}>
                        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 246.5 117.1">
                            <path d="M163.8,31.7l9.3-27L1,93.5h106.8l-10.3,23.8h111.8L245.3,0L163.8,31.7z M189.3,98.2h-64l11-23h-59l68.4-32.9l-5.1,17.9l68.7-26L189.3,98.2z"/>
                        </svg>
                    </div>
                </RouterLink>
                <div className={classes.flexGrow} />
                <Hidden mdDown>
                    {/*<Tooltip title="Notificações">
                        <IconButton color="inherit">
                            <Badge
                                badgeContent={notifications.length}
                                color="primary"
                                variant="dot"
                            >
                                <NotificationsIcon />
                            </Badge>
                        </IconButton>
                    </Tooltip>*/}
                    <Tooltip title="Sair">
                        <IconButton
                            className={classes.signOutButton}
                            color="inherit"
                            onClick={layout.disconnect}
                        >
                            <InputIcon />
                        </IconButton>
                    </Tooltip>
                </Hidden>
                <Hidden lgUp>
                    <IconButton
                        color="inherit"
                        onClick={onSidebarOpen}
                    >
                        <MenuIcon />
                    </IconButton>
                </Hidden>
            </Toolbar>
        </AppBar>
    );
};