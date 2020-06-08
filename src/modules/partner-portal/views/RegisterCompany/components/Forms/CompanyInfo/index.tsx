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

    policy: {
        marginTop: theme.spacing(1),
        display: 'flex',
        alignItems: 'center'
    },

    policyCheckbox: {
        marginLeft: '-14px'
    },

    policyText: {},

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

    companyName: Yup.string()
    .required('Por favor, insira o nome da empresa'),

    tradingName: Yup.string()
    .required('Por favor, insira a razão social da empresa'),

    document: Yup.string()
    .matches(/^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/, 'Por favor, insira o CNPJ da empresa')
    .required('Por favor, insira o CNPJ da empresa'),

    policy: Yup.boolean()
    .test({
        name: 'policyCheck',
        test: value => value,
        message: 'Você precisa aceitar para continuar',
    }),

});

export const initialValues = {
    companyName: '',
    tradingName: '',
    document: '',
    policy: '',
};

export default function(props) {

    const classes = useStyles(props);

    function renderCompanyNameInput(fProps) {
        return (
            <TextField
                className={classes.textField}
                disabled={props.busy}
                error={fProps.errors.companyName && fProps.touched.companyName}
                fullWidth
                helperText={
                    fProps.errors.companyName && fProps.touched.companyName ? fProps.errors.companyName : null
                }
                label="Nome fantasia"
                name="companyName"
                onBlur={fProps.handleBlur}
                onChange={fProps.handleChange}
                type="text"
                value={fProps.values.companyName}
                variant="outlined"
            />
        );
    }

    function renderTradingNameInput(fProps) {
        return (
            <TextField
                className={classes.textField}
                disabled={props.busy}
                error={fProps.errors.tradingName && fProps.touched.tradingName}
                fullWidth
                helperText={
                    fProps.errors.tradingName && fProps.touched.tradingName ? fProps.errors.tradingName : null
                }
                label="Razão social"
                name="tradingName"
                onBlur={fProps.handleBlur}
                onChange={fProps.handleChange}
                type="text"
                value={fProps.values.tradingName}
                variant="outlined"
            />
        );
    }

    function renderDocumentInput(fProps) {
        return (
            <InputMask
                mask="99.999.999/9999-99"
                onChange={fProps.handleChange}
                value={fProps.values.document}
                onBlur={fProps.handleBlur}
                name="document"
                disabled={props.busy}
            >
                <TextField
                    className={classes.textField}
                    error={fProps.errors.document && fProps.touched.document}
                    fullWidth
                    helperText={
                        fProps.errors.document && fProps.touched.document ? fProps.errors.document : null
                    }
                    label="CNPJ"
                    type="text"
                    variant="outlined"
                    name="document"
                />
            </InputMask>
        );
    }

    function renderPolicyCheckbox(formikProps) {
        return (
            <div style={{ marginBottom: '10px' }}>
                <div className={classes.policy}>
                    <Checkbox
                        checked={formikProps.values.policy || false}
                        className={classes.policyCheckbox}
                        color="primary"
                        name="policy"
                        onChange={(event, checked) => { formikProps.setFieldValue('policy', checked, true) }}
                    />
                    <Typography
                        className={classes.policyText}
                        color="textSecondary"
                        variant="body1"
                    >
                        Eu aceito os{' '}
                        <Link
                            color="primary"
                            component={RouterLink}
                            to="#"
                            underline="always"
                            variant="h6"
                        >
                            Termos e Condições
                        </Link>
                    </Typography>
                </div>
                {formikProps.errors.policy && formikProps.touched.policy && (
                    <FormHelperText variant="outlined" error style={{ marginTop: '-3px' }}>
                        {formikProps.errors.policy}
                    </FormHelperText>
                )}
            </div>
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
                {renderCompanyNameInput(fProps)}
                {renderTradingNameInput(fProps)}
                {renderDocumentInput(fProps)}
                {renderPolicyCheckbox(fProps)}
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