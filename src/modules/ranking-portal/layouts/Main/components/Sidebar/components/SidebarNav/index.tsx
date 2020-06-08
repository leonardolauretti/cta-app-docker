import React, { forwardRef } from 'react';
import { NavLink as RouterLink, useParams, useLocation, useHistory, useRouteMatch } from 'react-router-dom';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { colors } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined';
import InputIcon from '@material-ui/icons/Input';

interface IProps {
    pages: {
        title: string;
        icon: any;
        href: string;
    }[];
    className?: string;
}

const useStyles = makeStyles((theme: any) => ({
    root: {},

    item: {
        display: 'flex',
        paddingTop: 0,
        paddingBottom: 0,
    },

    button: {
        color: colors.blueGrey[800],
        padding: '10px 8px',
        justifyContent: 'flex-start',
        textTransform: 'none',
        letterSpacing: 0,
        width: '100%',
        fontWeight: theme.typography.fontWeightMedium,
    },

    icon: {
        color: theme.palette.icon,
        width: 24,
        height: 24,
        display: 'flex',
        alignItems: 'center',
        marginRight: theme.spacing(1),
    },

    active: {
        color: theme.palette.primary.main,
        fontWeight: theme.typography.fontWeightMedium,
        '& $icon': {
            color: theme.palette.primary.main,
        },
    },
}));

export default function(props: IProps) {

    const { pages, className, ...rest } = props;
    const classes = useStyles(props);
    const params = useParams();
    const location = useLocation();
    const history = useHistory();
    const match = useRouteMatch();

    const CustomRouterLink = forwardRef((props: any, ref: any) => (
        <div
            ref={ref}
            style={{ flexGrow: 1 }}
        >
            <RouterLink
                {...props}
                to={props.to}
            />
        </div>
    ));

    return (
        <List
            {...rest}
            className={clsx(classes.root, className)}
        >
            {pages.map(page => (
                <ListItem
                    className={classes.item}
                    disableGutters
                    key={page.title}
                >
                    <Button
                        activeClassName={classes.active}
                        className={classes.button}
                        component={CustomRouterLink}
                        to={page.href}
                    >
                        <div className={classes.icon}>{page.icon}</div>{page.title}
                    </Button>
                </ListItem>
            ))}
        </List>
    );
};