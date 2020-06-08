import React, { useState, useEffect } from 'react';
import { Link as RouterLink, withRouter, useHistory, useLocation } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import { useStyles } from './styles';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Form from './components/ResetPasswordForm';
import * as QueryString from 'query-string';

export default function(props) {
    const classes = useStyles(props);
    const history = useHistory();
    const location = useLocation();

    const params = QueryString.parse(location.search);
    console.log('Params', params);

    function handleBack() {
        history.goBack();
    }

    function handleSignIn() {}

    return (
        <div className={classes.root}>
            <Grid
                className={classes.grid} 
                container
            >
                <Grid
                    className={classes.splashContainer}
                    item
                    lg={5}
                ></Grid>
                <Grid
                    className={classes.content}
                    item
                    lg={7}
                    xs={12}
                >
                    <div className={classes.content}>
                        <div className={classes.contentHeader}>
                            <IconButton onClick={handleBack}>
                                <ArrowBackIcon />
                            </IconButton>
                        </div>
                        <div className={classes.contentBody}>
                            <Form 
                                busy={false}
                                onSubmit={(values) => console.log(values)}
                            />
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}