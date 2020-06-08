import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link as RouterLink, withRouter } from 'react-router-dom';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import CircularProgress from '@material-ui/core/CircularProgress';

interface IProps {
    busy: boolean;
    onSubmit: (data: any) => void;
    innerRef?: any;
};

const validationSchema = Yup.object().shape({

    first_name: Yup.string()
    .required('Por favor, insira seu primeiro nome'),

    last_name: Yup.string()
    .required('Por favor, insira seu sobrenome'),

    email: Yup.string()
    .email('E-mail inválido')
    .required('Por favor, insira seu email'),

    password: Yup.string()
    .min(6, 'Senha muito curta')
    .max(128, 'Senha muito longa')
    .required('Por favor, insira sua senha'),
});

const initialValues = {
    first_name: '',
    last_name: '',
    email: '',
    password: '',
};

const useStyles = makeStyles((theme: any) => ({

    textField: {
        marginTop: theme.spacing(2)
    },
}));

export default function(props: IProps) {

    const classes = useStyles(props);
    const { busy, onSubmit, innerRef } = props;

    function renderFirstNameInput(fProps) {
        return (
            <TextField
                className={classes.textField}
                fullWidth
                type="text"
                variant="outlined"
                label="Primeiro nome"
                name="first_name"
                disabled={busy}
                value={fProps.values.first_name}
                error={fProps.errors.first_name && fProps.touched.first_name}
                helperText={
                    fProps.errors.first_name && fProps.touched.first_name ? fProps.errors.first_name : null
                }
                onBlur={fProps.handleBlur}
                onChange={fProps.handleChange}
            />
        );
    }

    function renderLastNameInput(fProps) {
        return (
            <TextField
                className={classes.textField}
                fullWidth
                type="text"
                variant="outlined"
                label="Sobrenome"
                name="last_name"
                disabled={busy}
                value={fProps.values.last_name}
                error={fProps.errors.last_name && fProps.touched.last_name}
                helperText={
                    fProps.errors.last_name && fProps.touched.last_name ? fProps.errors.last_name : null
                }
                onBlur={fProps.handleBlur}
                onChange={fProps.handleChange}
            />
        );
    }

    function renderEmailInput(fProps) {
        return (
            <TextField
                className={classes.textField}
                fullWidth
                type="text"
                variant="outlined"
                label="E-mail"
                name="email"
                disabled={busy}
                value={fProps.values.email}
                error={fProps.errors.email && fProps.touched.email}
                helperText={
                    fProps.errors.email && fProps.touched.email ? fProps.errors.email : null
                }
                onBlur={fProps.handleBlur}
                onChange={fProps.handleChange}
            />
        );
    }

    function renderPasswordInput(fProps) {
        return (
            <TextField
                className={classes.textField}
                fullWidth
                type="password"
                variant="outlined"
                label="Senha"
                name="password"
                disabled={busy}
                value={fProps.values.password}
                error={fProps.errors.password && fProps.touched.password}
                helperText={
                    fProps.errors.password && fProps.touched.password ? fProps.errors.password : null
                }
                onBlur={fProps.handleBlur}
                onChange={fProps.handleChange}
            />
        );
    }

    function renderForm(fProps) {
        return (
            <form
                onSubmit={fProps.handleSubmit}
                noValidate
            >
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        {renderFirstNameInput(fProps)}
                    </Grid>
                    <Grid item xs={12}>
                        {renderLastNameInput(fProps)}
                    </Grid>
                    <Grid item xs={12}>
                        {renderEmailInput(fProps)}
                    </Grid>
                    <Grid item xs={12}>
                        {renderPasswordInput(fProps)}
                    </Grid>
                </Grid>
            </form>
        );
    }


    return (
        <Formik
            initialValues={initialValues}
            innerRef={innerRef}
            validationSchema={validationSchema}
            onSubmit={(values, actions) => onSubmit(values)}
            component={(fProps) => renderForm(fProps)}
        />
    );
}