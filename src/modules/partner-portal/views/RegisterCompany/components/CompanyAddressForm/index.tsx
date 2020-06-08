import React, { useState, useEffect } from 'react';
import { Link as RouterLink, withRouter } from 'react-router-dom';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Checkbox from '@material-ui/core/Checkbox';
import FormHelperText from '@material-ui/core/FormHelperText';
import { useStyles } from './styles';
import InputMask from 'react-input-mask';
import axios from 'axios';

interface IProps {
    busy: boolean;
    onSubmit: (data: any) => void;
};

async function postalCodeLookup(postalCode: string) {
    const endpoint = `http://localhost:3000/addresses/postal-codes/${postalCode}`;
    const response = await axios.get(endpoint);

    if (!response) {
        return false;
    }

    return response.data;
}

async function loadAndPopulateAddress(formikProps) {
    const postalCode = formikProps.values.postalCode;
    const address = await postalCodeLookup(postalCode);
    formikProps.setValues(address);
    
    const fields = Object.keys(address);
    for (const field of fields) {
        await formikProps.setFieldTouched(field, true, true);
    }
}

const validationSchema = Yup.object().shape({

    postalCode: Yup.string()
    .matches(/[0-9]{5}-[0-9]{3}/, 'Por favor, insira o CEP da empresa')
    .required('Por favor, insira o CEP da empresa'),

    street: Yup.string()
    .required('Por favor, insira o logradouro da empresa'),

    number: Yup.string()
    .required('Por favor, insira o número da empresa'),

    neighborhood: Yup.string()
    .required('Por favor, insira o bairro da empresa'),

    city: Yup.string()
    .required('Por favor, insira a cidade da empresa'),

    state: Yup.string()
    .required('Por favor, insira o estado da empresa'),

});

const initialValues = {
    postalCode: '',
    street: '',
    number: '',
    complement: '',
    neighborhood: '',
    city: '',
    state: '',
};

export default function(props) {

    const classes = useStyles(props);

    function renderPostalCodeInput(formikProps) {
        return (
            <InputMask
                mask="99999-999"
                onChange={formikProps.handleChange}
                value={formikProps.values.postalCode}
                onBlur={(event) => {
                    formikProps.handleBlur(event);
                    loadAndPopulateAddress(formikProps);
                }}
                name="postalCode"
            >
                <TextField
                    className={classes.textField}
                    disabled={props.busy}
                    error={formikProps.errors.postalCode && formikProps.touched.postalCode}
                    fullWidth
                    helperText={
                        formikProps.errors.postalCode && formikProps.touched.postalCode ? formikProps.errors.postalCode : null
                    }
                    label="CEP"
                    type="text"
                    variant="outlined"
                    name="postalCode"
                />
            </InputMask>
        );
    }

    function formTemplate(formikProps) {
        return (
            <form
                className={classes.form}
                onSubmit={formikProps.handleSubmit}
                noValidate
            >
                <Typography
                    className={classes.title}
                    variant="h2"
                >
                    Cadastrar o endereço da empresa
                </Typography>
                <Typography
                    color="textSecondary"
                    gutterBottom
                >
                    Use as informações da sua empresa para obter as vantagens de parceiro CTA
                </Typography>
                { renderPostalCodeInput(formikProps) }
                <TextField
                    className={classes.textField}
                    disabled={props.busy}
                    error={formikProps.errors.street && formikProps.touched.street}
                    fullWidth
                    helperText={
                        formikProps.errors.street && formikProps.touched.street ? formikProps.errors.street : null
                    }
                    label="Logradouro"
                    name="street"
                    onBlur={formikProps.handleBlur}
                    onChange={formikProps.handleChange}
                    type="text"
                    value={formikProps.values.street}
                    variant="outlined"
                />
                <TextField
                    className={classes.textField}
                    disabled={props.busy}
                    error={formikProps.errors.number && formikProps.touched.number}
                    fullWidth
                    helperText={
                        formikProps.errors.number && formikProps.touched.number ? formikProps.errors.number : null
                    }
                    label="Número"
                    name="number"
                    onBlur={formikProps.handleBlur}
                    onChange={formikProps.handleChange}
                    type="text"
                    value={formikProps.values.number}
                    variant="outlined"
                />
                <TextField
                    className={classes.textField}
                    disabled={props.busy}
                    error={formikProps.errors.complement && formikProps.touched.complement}
                    fullWidth
                    helperText={
                        formikProps.errors.complement && formikProps.touched.complement ? formikProps.errors.complement : null
                    }
                    label="Complemento"
                    name="complement"
                    onBlur={formikProps.handleBlur}
                    onChange={formikProps.handleChange}
                    type="text"
                    value={formikProps.values.complement}
                    variant="outlined"
                />
                <TextField
                    className={classes.textField}
                    disabled={props.busy}
                    error={formikProps.errors.neighborhood && formikProps.touched.neighborhood}
                    fullWidth
                    helperText={
                        formikProps.errors.neighborhood && formikProps.touched.neighborhood ? formikProps.errors.neighborhood : null
                    }
                    label="Bairro"
                    name="neighborhood"
                    onBlur={formikProps.handleBlur}
                    onChange={formikProps.handleChange}
                    type="text"
                    value={formikProps.values.neighborhood}
                    variant="outlined"
                />
                <TextField
                    className={classes.textField}
                    disabled={props.busy}
                    error={formikProps.errors.city && formikProps.touched.city}
                    fullWidth
                    helperText={
                        formikProps.errors.city && formikProps.touched.city ? formikProps.errors.city : null
                    }
                    label="Cidade"
                    name="city"
                    onBlur={formikProps.handleBlur}
                    onChange={formikProps.handleChange}
                    type="text"
                    value={formikProps.values.city}
                    variant="outlined"
                />
                <TextField
                    className={classes.textField}
                    disabled={props.busy}
                    error={formikProps.errors.state && formikProps.touched.state}
                    fullWidth
                    helperText={
                        formikProps.errors.state && formikProps.touched.state ? formikProps.errors.state : null
                    }
                    label="Estado"
                    name="state"
                    onBlur={formikProps.handleBlur}
                    onChange={formikProps.handleChange}
                    type="text"
                    value={formikProps.values.state}
                    variant="outlined"
                />
                <div>
                    <Button
                        className={classes.button}
                    >
                        Voltar
                    </Button>
                    <Button
                        variant="contained"
                        color="primary"
                        className={classes.button}
                        type="submit"
                    >
                        Próximo
                    </Button>
                </div>
            </form>
        );
    }

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values, actions) => {
                props.onSubmit(values);
            }}
            component={(formikProps) => formTemplate(formikProps)}
        ></Formik>
    );
}