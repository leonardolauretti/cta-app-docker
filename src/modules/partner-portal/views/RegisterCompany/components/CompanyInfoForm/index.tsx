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

interface IProps {
    busy: boolean;
    onSubmit: (data: any) => void;
};

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

const initialValues = {
    companyName: '',
    tradingName: '',
    document: '',
    policy: '',
    postalCode: '',
    street: '',
    number: '',
    complement: '',
    neighborhood: '',
    city: '',
    state: '',
    country: '',
};

export default function(props) {

    const classes = useStyles(props);

    function renderDocumentInput(formikProps) {
        return (
            <InputMask
                mask="99.999.999/9999-99"
                onChange={formikProps.handleChange}
                value={formikProps.values.document}
                onBlur={formikProps.handleBlur}
                name="document"
            >
                <TextField
                    className={classes.textField}
                    disabled={props.busy}
                    error={formikProps.errors.document && formikProps.touched.document}
                    fullWidth
                    helperText={
                        formikProps.errors.document && formikProps.touched.document ? formikProps.errors.document : null
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

    function formTemplate(formikProps) {
        return (
            <form
                className={classes.form}
                onSubmit={formikProps.handleSubmit}
                noValidate
            >
                <TextField
                    className={classes.textField}
                    disabled={props.busy}
                    error={formikProps.errors.companyName && formikProps.touched.companyName}
                    fullWidth
                    helperText={
                        formikProps.errors.companyName && formikProps.touched.companyName ? formikProps.errors.companyName : null
                    }
                    label="Nome fantasia"
                    name="companyName"
                    onBlur={formikProps.handleBlur}
                    onChange={formikProps.handleChange}
                    type="text"
                    value={formikProps.values.companyName}
                    variant="outlined"
                />
                <TextField
                    className={classes.textField}
                    disabled={props.busy}
                    error={formikProps.errors.tradingName && formikProps.touched.tradingName}
                    fullWidth
                    helperText={
                        formikProps.errors.tradingName && formikProps.touched.tradingName ? formikProps.errors.tradingName : null
                    }
                    label="Razão social"
                    name="tradingName"
                    onBlur={formikProps.handleBlur}
                    onChange={formikProps.handleChange}
                    type="text"
                    value={formikProps.values.tradingName}
                    variant="outlined"
                />
                { renderDocumentInput(formikProps) }
                { renderPolicyCheckbox(formikProps) }
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