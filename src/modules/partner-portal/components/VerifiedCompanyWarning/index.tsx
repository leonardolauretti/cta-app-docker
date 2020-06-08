import React from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

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
                <AlertTitle className={classes.alertTitle}>A empresa está sendo verificada</AlertTitle>
                <Typography variant="body1">
                    Entraremos em contato pelo telefone ou e-mail informado para verificar e confirmar os dados cadastrais.
                </Typography>
                <Typography variant="body1">
                    Os benefícios de parceiro serão liberados somente após a verificação.
                </Typography>
                <Typography variant="body1">
                    Em caso de dúvidas, entre em contato com a CTA Eletrônica através do telefone <strong>(11) 3791 7255</strong>.
                </Typography>
            </Alert>
        </div>
    );
}