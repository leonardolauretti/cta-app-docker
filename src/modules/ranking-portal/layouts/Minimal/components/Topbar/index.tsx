import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import cta_logo_src from 'src/assets/img/logo-cta-170px.png';

import { LayoutProvider, useLayout } from '../../../../components/useLayout';

const useStyles = makeStyles(() => ({
    root: {
        boxShadow: 'none',
        backgroundColor: '#0a0349',
    },

    toolbar: {},

    toolbarContent: {
        width: '100%',
    },

    logo: {
        display: 'block',
        textAlign: 'center',
        padding: '21px 0 12px 0',

        '& img': {
            width: '170px',
            height: '33px',
            display: 'inline-block',
        },
    },

    svgLogo: {
        '& svg': {
            display: 'block',
            height: '24px',
        },
        '& path': {
            fill: 'white'
        },
    },
}));

export default function Topbar(props) {

    const { className, ...rest } = props;
    const classes = useStyles(props);
    const layout = useLayout();

    return (
        <AppBar
            {...rest}
            className={clsx(classes.root, className)}
            color="primary"
            position="fixed"
        >
            <Toolbar disableGutters className={classes.toolbar}>
                <div className={classes.toolbarContent} ref={layout.appBarRef}>
                    <div className={classes.logo}>
                        <RouterLink to="/">
                            <img
                                src={cta_logo_src}
                                title="CTA Eletrônica"
                                alt="CTA Eletrônica"
                            />
                        </RouterLink>
                    </div>
                </div>
            </Toolbar>

        </AppBar>
    );
};