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
    root: {},
}));

export default function Content(props) {

    const classes = useStyles(props);
    const layout = useLayout();

    return (
        <div
            className={classes.root}
            ref={layout.getRef('contentRef')}
        >
            {props.children}
        </div>
    );
};