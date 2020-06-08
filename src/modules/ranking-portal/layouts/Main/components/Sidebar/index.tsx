import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';

import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import TextFieldsIcon from '@material-ui/icons/TextFields';
import ImageIcon from '@material-ui/icons/Image';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import SettingsIcon from '@material-ui/icons/Settings';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import TimelineIcon from '@material-ui/icons/Timeline';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import BusinessIcon from '@material-ui/icons/Business';

import SidebarNav from './components/SidebarNav';
import Profile from './components/Profile';
import UpgradePlan from './components/UpgradePlan';

import { useLayout } from '../../../../components/useLayout';

interface IProps {
    className?: string;
    onClose: () => void;
    open: boolean;
    variant: "permanent" | "persistent" | "temporary";
};

const useStyles = makeStyles((theme: any) => ({
    drawer: {
        width: 240,
        [theme.breakpoints.up('lg')]: {
            marginTop: 64,
            height: 'calc(100% - 64px)',
        },
    },

    root: {
        backgroundColor: theme.palette.white,
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        padding: theme.spacing(2),
    },

    divider: {
        margin: theme.spacing(2, 0),
    },

    nav: {
        marginBottom: theme.spacing(2),
    },
}));

export default function(props: IProps) {

    const { open, variant, onClose, className, ...rest } = props;
    const classes = useStyles(props);
    const layout = useLayout();

    const pages = [
        {
            title: 'Página inicial',
            href: layout.paths.OVERVIEW,
            icon: <DashboardIcon />,
        },
        {
            title: 'Ranking',
            href: layout.paths.RANKING,
            icon: <TimelineIcon />,
        },
        /*{
            title: 'Mensagens',
            href: layout.paths.MESSENGER,
            icon: <QuestionAnswerIcon />,
        },*/
        {
            title: 'Conta',
            href: layout.paths.ACCOUNT,
            icon: <AccountBoxIcon />,
        },
        {
            title: 'Configurações',
            href: layout.paths.SETTINGS,
            icon: <SettingsIcon />,
        },
    ];

    return (
        <Drawer
            anchor="left"
            classes={{ paper: classes.drawer }}
            onClose={onClose}
            open={open}
            variant={variant}
        >
            <div
                {...rest}
                className={clsx(classes.root, className)}
            >
                <Profile />
                <Divider className={classes.divider} />
                <SidebarNav
                    className={classes.nav}
                    pages={pages}
                />
                {/*<UpgradePlan />*/}
            </div>
        </Drawer>
    );
};