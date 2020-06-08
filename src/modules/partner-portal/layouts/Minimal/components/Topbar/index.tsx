import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { AppBar, Toolbar } from '@material-ui/core';
import cta_logo_src from 'src/assets/img/logo-cta-170px.png';

const useStyles = makeStyles(() => ({
    root: {
        boxShadow: 'none'
    },

    logo: {
        display: 'block',
        width: '108px',
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

    return (
        <AppBar
            {...rest}
            className={clsx(classes.root, className)}
            color="primary"
            position="fixed"
        >
            <Toolbar>
                <RouterLink to="/">
                    <img src={cta_logo_src} title="CTA Eletrônica" alt="CTA Eletrônica" style={{ display: 'block', marginLeft: '12px' }} />
                    {/*<div className={classes.svgLogo}>
                        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 246.5 117.1">
                            <path d="M163.8,31.7l9.3-27L1,93.5h106.8l-10.3,23.8h111.8L245.3,0L163.8,31.7z M189.3,98.2h-64l11-23h-59l68.4-32.9l-5.1,17.9l68.7-26L189.3,98.2z"/>
                        </svg>
                    </div>*/}
                </RouterLink>
            </Toolbar>
        </AppBar>
    );
};