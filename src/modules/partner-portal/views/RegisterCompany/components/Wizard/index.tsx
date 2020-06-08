import React, { useState } from 'react';
import { Link as RouterLink, withRouter } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Checkbox from '@material-ui/core/Checkbox';
import FormHelperText from '@material-ui/core/FormHelperText';
import { useStyles } from './styles';
import TextField from '@material-ui/core/TextField';
import InputMask from 'react-input-mask';
import * as Yup from 'yup';
import { Formik } from 'formik';
import axios from 'axios';

interface IProps {
    busy?: boolean;
}

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

const infoValidationSchema = Yup.object().shape({

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

const addressValidationSchema = Yup.object().shape({

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

    country: Yup.string()
    .required('Por favor, insira o país da empresa'),

});

const steps = [
    {
        label: 'Informações básicas',
        fields: ['companyName', 'tradingName', 'document', 'policy'],
        validationSchema: infoValidationSchema,
    },
    {
        label: 'Endereço da empresa',
        fields: ['postalCode', 'street', 'number', 'complement', 'neighborhood', 'city', 'state', 'country'],
        validationSchema: addressValidationSchema,
    }
];

export default function(props: IProps) {

    const classes = useStyles(props);

    const [activeStep, setActiveStep] = useState(0);

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
            >
                <TextField
                    className={classes.textField}
                    disabled={props.busy}
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

    function renderPolicyCheckbox(fProps) {
        return (
            <div style={{ marginBottom: '10px' }}>
                <div className={classes.policy}>
                    <Checkbox
                        checked={fProps.values.policy || false}
                        className={classes.policyCheckbox}
                        color="primary"
                        name="policy"
                        onChange={(event, checked) => { fProps.setFieldValue('policy', checked, true) }}
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
                {fProps.errors.policy && fProps.touched.policy && (
                    <FormHelperText variant="outlined" error style={{ marginTop: '-3px' }}>
                        {fProps.errors.policy}
                    </FormHelperText>
                )}
            </div>
        );
    }

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
            >
                <TextField
                    className={classes.textField}
                    disabled={props.busy}
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
                value={fProps.values.state}
                variant="outlined"
            />
        );
    }

    async function validateStep(fProps) {
        for (const field of steps[activeStep].fields) {
            fProps.setFieldTouched(field, true, true);
        }
        const errors = await fProps.validateForm();
        console.log('Errors', errors);
        if (Object.keys(errors).length < 1)  {
            setActiveStep(activeStep + 1);
        }
    }

    function renderActions(fProps) {
        return (
            <div className={classes.actionsContainer}>
                <Button
                    className={classes.button}
                    disabled={activeStep === 0 ? true : false}
                    onClick={() => {
                        setActiveStep(activeStep - 1);
                    }}
                >
                    Voltar
                </Button>
                <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    onClick={() => {
                        validateStep(fProps);
                    }}
                >
                    Próximo
                </Button>
            </div>
        );
    }

    function renderForm(fProps) {
        return (
            <form
            onSubmit={fProps.handleSubmit}
            >
                <Stepper
                    activeStep={activeStep}
                    orientation="vertical"
                >
                    <Step>
                        <StepLabel>Informações básicas</StepLabel>
                        <StepContent>
                            {renderCompanyNameInput(fProps)}
                            {renderTradingNameInput(fProps)}
                            {renderDocumentInput(fProps)}
                            {renderPolicyCheckbox(fProps)}
                            {renderActions(fProps)}
                        </StepContent>
                    </Step>

                    <Step>
                        <StepLabel>Endereço da empresa</StepLabel>
                        <StepContent>
                            {renderPostalCodeInput(fProps)}
                            {renderStreetInput(fProps)}
                            {renderNumberInput(fProps)}
                            {renderComplementInput(fProps)}
                            {renderNeighborhoodInput(fProps)}
                            {renderCityInput(fProps)}
                            {renderStateInput(fProps)}
                            {renderCountryInput(fProps)}
                            {renderActions(fProps)}
                        </StepContent>
                    </Step>

                    <Step>
                        <StepLabel>Finalizar cadastro</StepLabel>
                        <StepContent>
                            {renderActions(fProps)}
                        </StepContent>
                    </Step>
                </Stepper>
            </form>
        );
    }

    return (
        <div className={classes.root}>
            <Formik
            initialValues={initialValues}
            validationSchema={steps[activeStep].validationSchema}
            component={renderForm}
            onSubmit={(values) => console.log(values)}
            />
        </div>
    );
}