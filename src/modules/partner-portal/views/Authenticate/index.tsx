import React, { useState, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link as RouterLink, withRouter, useHistory } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import CircularProgress from '@material-ui/core/CircularProgress';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import FormHelperText from '@material-ui/core/FormHelperText';
import Form from './components/Form';
import { useAuth } from '../../components/useAuth';
import { Paths } from '../../module';

const useStyles = makeStyles((theme: any) => ({

    root: {
        backgroundColor: theme.palette.background.default,
        height: '100%'
    },

    grid: {
        height: '100%'
    },

    splashContainer: {
        [theme.breakpoints.down('md')]: {
            display: 'none'
        },
        backgroundImage: 'url(' + require('src/assets/img/guille-pozzi-PO0UHx-5mHo-unsplash.jpg') + ')',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
    },

    content: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
    },

    contentHeader: {
        display: 'flex',
        alignItems: 'center',
        paddingTop: theme.spacing(5),
        paddingBototm: theme.spacing(2),
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2)
    },

    contentBody: {
        flexGrow: 1,
        display: 'flex',
        alignItems: 'center',
        [theme.breakpoints.down('md')]: {
            justifyContent: 'center'
        },
    },

    form: {
        paddingLeft: 100,
        paddingRight: 100,
        paddingBottom: 125,
        flexBasis: 700,
        [theme.breakpoints.down('sm')]: {
            paddingLeft: theme.spacing(2),
            paddingRight: theme.spacing(2)
        }
    },

    title: {
        marginTop: theme.spacing(3)
    },

    forgotPassword: {
        float: 'right',
        marginTop: '30px',
    },

    signInButton: {
        margin: theme.spacing(2, 0)
    },
}));

export default function(props) {

    const classes = useStyles(props);
    const auth = useAuth();
    const history = useHistory();
    const formRef = useRef(null);

    function handleBack() {
        history.goBack();
    }

    function handleAuthenticate(data) {
        auth.authenticate({
            email: data.email,
            password: data.password,
        });
    }

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
                />
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
                            <div className={classes.form}>
                                <Grid container spacing={3}>
                                    <Grid item xs={12}>
                                        <Typography
                                            className={classes.title}
                                            variant="h2"
                                            gutterBottom
                                        >
                                            Entrar
                                        </Typography>
                                        <Typography
                                            color="textSecondary"
                                        >
                                            Acesse sua conta utilizando seu e-mail e a senha cadastrada
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Form
                                            busy={auth.busy}
                                            onSubmit={(values) => handleAuthenticate(values)}
                                            innerRef={formRef}
                                        />
                                        <Typography
                                            className={classes.forgotPassword}
                                            color="textSecondary"
                                            variant="body1"
                                        >
                                            <Link
                                                component={RouterLink}
                                                to={Paths.RECOVER_PASSWORD}
                                                variant="h6"
                                            >
                                                Esqueceu sua senha?
                                            </Link>
                                        </Typography>
                                        <Button
                                            className={classes.signInButton}
                                            color="primary"
                                            disabled={auth.busy}
                                            fullWidth
                                            size="large"
                                            variant="contained"
                                            onClick={() => formRef.current.handleSubmit()}
                                        >
                                            {
                                                auth.busy
                                                ? <CircularProgress size={26} />
                                                : 'Entrar'
                                            }
                                        </Button>
                                        {
                                            auth.error
                                            ? <FormHelperText error>{auth.error}</FormHelperText>
                                            : null
                                        }
                                        <Typography
                                            color="textSecondary"
                                            variant="body1"
                                        >
                                            Ainda não tem uma conta?{' '}
                                            <Link
                                                component={RouterLink}
                                                to={Paths.SIGN_UP}
                                                variant="h6"
                                            >
                                                Cadastre-se
                                            </Link>
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </div>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}