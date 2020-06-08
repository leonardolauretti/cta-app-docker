import React, { forwardRef } from 'react';
import { NavLink, useHistory, Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
//import Link from '@material-ui/core/Link';

import Alert from '@material-ui/lab/Alert';
import AlertTitle from '@material-ui/lab/AlertTitle';

import { Paths } from 'src/modules/partner-portal/module';

const useStyles = makeStyles((theme: any) => ({
    root: {},

    alert: {},

    alertTitle: {},
}));

export default function(props) {
    const classes = useStyles(props);
    const history = useHistory();

    return (
        <div className={classes.root}>
            <Alert variant="outlined" severity="warning" className={classes.alert}>
                <AlertTitle className={classes.alertTitle}>Parece que você ainda não terminou de cadastrar sua empresa</AlertTitle>
                <Typography variant="body1">
                    Para ter acesso aos recursos de parceiro da CTA Eletrônica, por favor, continue o cadastro da empresa.
                </Typography>
                <Typography variant="body1">
                    <Link to={Paths.ACCOUNT_COMPANIES}>Clique aqui para cadastrar a empresa</Link>
                </Typography>
                <Typography variant="body1">
                    Após o cadastro, nossos consultores irão entrar em contato para verificar e confirmar os dados. Os benefícios de parceiro serão liberados somente após a verificação.
                </Typography>
                <Typography variant="body1">
                    Em caso de dúvidas, entre em contato com a CTA Eletrônica através do telefone <strong>(11) 3791 7255</strong>.
                </Typography>
            </Alert>
        </div>
    );
}