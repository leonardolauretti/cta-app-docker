import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Checkbox from '@material-ui/core/Checkbox';
import FormHelperText from '@material-ui/core/FormHelperText';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import InputMask from 'react-input-mask';
import { Link as RouterLink, withRouter } from 'react-router-dom';
import axios from 'axios';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { makeStyles } from '@material-ui/core';

interface IProps {
    initialValues?: { [key: string]: any };
    busy: boolean;
    onSubmit: (data: any) => void;
    cancelButtonText?: string;
    cancelButtonDisabled?: boolean;
    onCancel?: () => void;
    submitButtonText?: string;
    submitButtonDisabled?: boolean;
};

const useStyles = makeStyles((theme: any) => ({

    root: {},

    form: {},

    textField: {
        marginTop: theme.spacing(2),
    },

    actionGroup: {},

    button: {
        margin: theme.spacing(2, 0),
    },

}));

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

export const initialValues = {
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

    function renderPostalCodeInput(fProps) {
        return (
            <InputMask
                mask="99999-999"
                onChange={fProps.handleChange}
                value={fProps.values.postalCode}
                onBlur={(event) => {
                    fProps.handleBlur(event);
                    loadAndPopulateAddress(fProps);
                }}
                name="postalCode"
                disabled={props.busy}
            >
                <TextField
                    className={classes.textField}
                    error={fProps.errors.postalCode && fProps.touched.postalCode}
                    fullWidth
                    helperText={
                        fProps.errors.postalCode && fProps.touched.postalCode ? fProps.errors.postalCode : null
                    }
                    label="CEP"
                    type="text"
                    variant="outlined"
                    name="postalCode"
                />
            </InputMask>
        );
    }

    function renderStreetInput(fProps) {
        return (
            <TextField
                className={classes.textField}
                disabled={props.busy}
                error={fProps.errors.street && fProps.touched.street}
                fullWidth
                helperText={
                    fProps.errors.street && fProps.touched.street ? fProps.errors.street : null
                }
                label="Logradouro"
                name="street"
                onBlur={fProps.handleBlur}
                onChange={fProps.handleChange}
                type="text"
                value={fProps.values.street}
                variant="outlined"
            />
        );
    }

    function renderNumberInput(fProps) {
        return (
            <TextField
                className={classes.textField}
                disabled={props.busy}
                error={fProps.errors.number && fProps.touched.number}
                fullWidth
                helperText={
                    fProps.errors.number && fProps.touched.number ? fProps.errors.number : null
                }
                label="Número"
                name="number"
                onBlur={fProps.handleBlur}
                onChange={fProps.handleChange}
                type="text"
                value={fProps.values.number}
                variant="outlined"
            />
        );
    }

    function renderComplementInput(fProps) {
        return (
            <TextField
                className={classes.textField}
                disabled={props.busy}
                error={fProps.errors.complement && fProps.touched.complement}
                fullWidth
                helperText={
                    fProps.errors.complement && fProps.touched.complement ? fProps.errors.complement : null
                }
                label="Complemento"
                name="complement"
                onBlur={fProps.handleBlur}
                onChange={fProps.handleChange}
                type="text"
                value={fProps.values.complement}
                variant="outlined"
            />
        );
    }

    function renderNeighborhoodInput(fProps) {
        return (
            <TextField
                className={classes.textField}
                disabled={props.busy}
                error={fProps.errors.neighborhood && fProps.touched.neighborhood}
                fullWidth
                helperText={
                    fProps.errors.neighborhood && fProps.touched.neighborhood ? fProps.errors.neighborhood : null
                }
                label="Bairro"
                name="neighborhood"
                onBlur={fProps.handleBlur}
                onChange={fProps.handleChange}
                type="text"
                value={fProps.values.neighborhood}
                variant="outlined"
            />
        );
    }

    function renderCityInput(fProps) {
        return (
            <TextField
                className={classes.textField}
                disabled={props.busy}
                error={fProps.errors.city && fProps.touched.city}
                fullWidth
                helperText={
                    fProps.errors.city && fProps.touched.city ? fProps.errors.city : null
                }
                label="Cidade"
                name="city"
                onBlur={fProps.handleBlur}
                onChange={fProps.handleChange}
                type="text"
                value={fProps.values.city}
                variant="outlined"
            />
        );
    }

    function renderStateInput(fProps) {
        return (
            <TextField
                className={classes.textField}
                disabled={props.busy}
                error={fProps.errors.state && fProps.touched.state}
                fullWidth
                helperText={
                    fProps.errors.state && fProps.touched.state ? fProps.errors.state : null
                }
                label="Estado"
                name="state"
                onBlur={fProps.handleBlur}
                onChange={fProps.handleChange}
                type="text"
                value={fProps.values.state}
                variant="outlined"
            />
        );
    }

    function renderCountryInput(fProps) {
        return (
            <TextField
                className={classes.textField}
                disabled={props.busy}
                error={fProps.errors.country && fProps.touched.country}
                fullWidth
                helperText={
                    fProps.errors.country && fProps.touched.country ? fProps.errors.country : null
                }
                label="País"
                name="country"
                onBlur={fProps.handleBlur}
                onChange={fProps.handleChange}
                type="text"
                value={fProps.values.country}
                variant="outlined"
            />
        );
    }

    function renderActionGroup(fProps) {
        return (
            <div className={classes.actionGroup}>
                <Button
                    className={classes.button}
                    disabled={props.cancelButtonDisabled || false}
                    onClick={props.onCancel}
                >
                    {props.cancelButtonText || 'Cancelar'}
                </Button>
                <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    type="submit"
                    disabled={props.submitButtonDisabled || false}
                >
                    {props.submitButtonText || 'Enviar'}
                </Button>
            </div>
        );
    }

    function renderForm(fProps) {
        return (
            <form
                className={classes.form}
                onSubmit={fProps.handleSubmit}
                noValidate
            >
                {renderPostalCodeInput(fProps)}
                {renderStreetInput(fProps)}
                {renderNumberInput(fProps)}
                {renderComplementInput(fProps)}
                {renderNeighborhoodInput(fProps)}
                {renderCityInput(fProps)}
                {renderStateInput(fProps)}
                {renderCountryInput(fProps)}
                {renderActionGroup(fProps)}
            </form>
        );
    }

    return (
        <Formik
            initialValues={props.initialValues ? props.initialValues : initialValues}
            validationSchema={validationSchema}
            onSubmit={(values, actions) => {
                props.onSubmit(values);
            }}
            component={(fProps) => renderForm(fProps)}
        ></Formik>
    );
}