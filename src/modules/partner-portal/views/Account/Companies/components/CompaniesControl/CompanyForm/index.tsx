import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import InputAdornment from '@material-ui/core/InputAdornment';
import CircularProgress from '@material-ui/core/CircularProgress';
import Select from '@material-ui/core/Select';
import MaskedInput from 'react-text-mask';
import axios from 'axios';

interface IProps {
    innerRef?: any;
    onSubmit: (values: any) => void;
    initialValues?: any;
    busy?: boolean;
}

const useStyles = makeStyles((theme: any) => ({
    root: {},
    textField: {
        marginTop: theme.spacing(2),
    },
}));

const validationSchema = Yup.object().shape({

    company_name: Yup.string()
    .min(3, 'Nome fantasia muito curto')
    .max(254, 'Nome fantasia muito longo')
    .required('Por favor, insira o nome fantasia'),

    trading_name: Yup.string()
    .min(3, 'Razão social muito curta')
    .max(254, 'Razão social muito longa')
    .required('Por favor, insira a razão social'),

    document: Yup.string()
    .required('Por favor, insira o CNPJ'),

    postal_code: Yup.string()
    .min(9, 'CEP inválido')
    .max(9, 'CEP inválido')
    .required('Por favor, insira seu CEP'),

    street: Yup.string()
    .min(6, 'Logradouro inválido')
    .max(254, 'Logradouro inválido')
    .required('Por favor, insira o logradouro'),

    number: Yup.number()
    .required('Por favor, insira o número'),

    neighborhood: Yup.string()
    .required('Por favor, insira o bairro'),

    city: Yup.string()
    .required('Por favor, insira a cidade'),

    state: Yup.string()
    .required('Por favor, insira o estado'),

    business_phone: Yup.string()
    .required('Por favor, insira o telefone comercial'),

    business_email: Yup.string()
    .required('Por favor, insira o e-mail comercial'),
});

const initialValues = {
    company_name: '',
    trading_name: '',
    document: '',
    postal_code: '',
    street: '',
    number: '',
    complement: '',
    neighborhood: '',
    city: '',
    state: '',
    country: 'Brasil',
    business_phone: '',
    business_email: '',
};

export default function(props: IProps) {
    const classes = useStyles(props);
    const [busy, setBusy] = useState(props.busy);

    function preloadAddress(fProps) {

        if (fProps.errors.postal_code) {
            return null;
        }

        let postal_code = fProps.values.postal_code;
        postal_code = postal_code.replace('-', '');
        setBusy(true);

        axios.get(`https://viacep.com.br/ws/${postal_code}/json`).then((response) => {
            fProps.setFieldValue('city', response.data.localidade);
            fProps.setFieldValue('street', response.data.logradouro);
            fProps.setFieldValue('neighborhood', response.data.bairro);
            fProps.setFieldValue('state', response.data.uf);
            fProps.setFieldValue('country', 'Brasil');
            setBusy(false);
        }).catch((error) => {
            console.log(error);
            setBusy(false);
        });
    }

    function renderCompanyNameInput(fProps) {
        return (
            <TextField
                className={classes.textField}
                fullWidth
                type="text"
                label="Nome fantasia"
                variant="outlined"
                name="company_name"
                disabled={busy}
                value={fProps.values.company_name}
                error={fProps.errors.company_name && fProps.touched.company_name}
                helperText={
                    fProps.errors.company_name && fProps.touched.company_name ? fProps.errors.company_name : null
                }
                onBlur={fProps.handleBlur}
                onChange={fProps.handleChange}
            />
        );
    }

    function renderTradingNameInput(fProps) {
        return (
            <TextField
                className={classes.textField}
                fullWidth
                type="text"
                label="Razão social"
                variant="outlined"
                name="trading_name"
                disabled={busy}
                value={fProps.values.trading_name}
                error={fProps.errors.trading_name && fProps.touched.trading_name}
                helperText={
                    fProps.errors.trading_name && fProps.touched.trading_name ? fProps.errors.trading_name : null
                }
                onBlur={fProps.handleBlur}
                onChange={fProps.handleChange}
            />
        );
    }

    function renderDocumentInput(fProps) {
        return (
            <MaskedInput
                mask={[/\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/]}
                name="document"
                value={fProps.values.document}
                onChange={fProps.handleChange}
                onBlur={fProps.handleBlur}
                render={(ref, props) => (
                    <TextField
                        inputRef={ref}
                        {...props} 
                        className={classes.textField}
                        fullWidth
                        type="text"
                        label="CNPJ"
                        variant="outlined"
                        disabled={busy}
                        error={fProps.errors.document && fProps.touched.document}
                        helperText={
                            fProps.errors.document && fProps.touched.document ? fProps.errors.document : null
                        }
                    />
                )}
            />
        );
    }

    function renderPostalCodeInput(fProps) {
        return (
            <MaskedInput
                mask={[/\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/]}
                name="postal_code"
                value={fProps.values.postal_code}
                onChange={fProps.handleChange}
                onBlur={(event) => {
                    fProps.handleBlur(event);
                    preloadAddress(fProps);
                }}
                render={(ref, props) => (
                    <TextField
                        inputRef={ref}
                        {...props}
                        className={classes.textField}
                        fullWidth
                        type="text"
                        label="Código postal"
                        variant="outlined"
                        disabled={busy}
                        error={fProps.errors.postal_code && fProps.touched.postal_code}
                        helperText={
                            fProps.errors.postal_code && fProps.touched.postal_code ? fProps.errors.postal_code : null
                        }
                    />
                )}
            />

        );
    }

    function renderStreetInput(fProps) {
        return (
            <TextField
                className={classes.textField}
                fullWidth
                type="text"
                label="Logradouro"
                variant="outlined"
                name="street"
                disabled={busy}
                value={fProps.values.street}
                error={fProps.errors.street && fProps.touched.street}
                helperText={
                    fProps.errors.street && fProps.touched.street ? fProps.errors.street : null
                }
                onBlur={fProps.handleBlur}
                onChange={fProps.handleChange}
            />
        );
    }

    function renderNumberInput(fProps) {
        return (
            <TextField
                className={classes.textField}
                fullWidth
                type="text"
                label="Número"
                variant="outlined"
                name="number"
                disabled={busy}
                value={fProps.values.number}
                error={fProps.errors.number && fProps.touched.number}
                helperText={
                    fProps.errors.number && fProps.touched.number ? fProps.errors.number : null
                }
                onBlur={fProps.handleBlur}
                onChange={fProps.handleChange}
            />
        );
    }

    function renderComplementInput(fProps) {
        return (
            <TextField
                className={classes.textField}
                fullWidth
                type="text"
                label="Complemento"
                variant="outlined"
                name="complement"
                disabled={busy}
                value={fProps.values.complement}
                error={fProps.errors.complement && fProps.touched.complement}
                helperText={
                    fProps.errors.complement && fProps.touched.complement ? fProps.errors.complement : null
                }
                onBlur={fProps.handleBlur}
                onChange={fProps.handleChange}
            />
        );
    }

    function renderNeighborhoodInput(fProps) {
        return (
            <TextField
                className={classes.textField}
                fullWidth
                type="text"
                label="Bairro"
                variant="outlined"
                name="neighborhood"
                disabled={busy}
                value={fProps.values.neighborhood}
                error={fProps.errors.neighborhood && fProps.touched.neighborhood}
                helperText={
                    fProps.errors.neighborhood && fProps.touched.neighborhood ? fProps.errors.neighborhood : null
                }
                onBlur={fProps.handleBlur}
                onChange={fProps.handleChange}
            />
        );
    }

    function renderCityInput(fProps) {
        return (
            <TextField
                className={classes.textField}
                fullWidth
                type="text"
                label="Cidade"
                variant="outlined"
                name="city"
                disabled={busy}
                value={fProps.values.city}
                error={fProps.errors.city && fProps.touched.city}
                helperText={
                    fProps.errors.city && fProps.touched.city ? fProps.errors.city : null
                }
                onBlur={fProps.handleBlur}
                onChange={fProps.handleChange}
            />
        );
    }

    function renderStateInput(fProps) {
        return (
            <TextField
                className={classes.textField}
                fullWidth
                type="text"
                label="Estado"
                variant="outlined"
                name="state"
                disabled={busy}
                value={fProps.values.state}
                error={fProps.errors.state && fProps.touched.state}
                helperText={
                    fProps.errors.state && fProps.touched.state ? fProps.errors.state : null
                }
                onBlur={fProps.handleBlur}
                onChange={fProps.handleChange}
            />
        );
    }

    function renderCountryInput(fProps) {
        return (
            <TextField
                className={classes.textField}
                fullWidth
                type="text"
                label="País"
                variant="outlined"
                name="country"
                disabled={busy}
                value={fProps.values.country}
                error={fProps.errors.country && fProps.touched.country}
                helperText={
                    fProps.errors.country && fProps.touched.country ? fProps.errors.country : null
                }
                onBlur={fProps.handleBlur}
                onChange={fProps.handleChange}
            />
        );
    }

    function renderBusinessPhoneInput(fProps) {

        function getMask() {
            const phoneLength = fProps.values.business_phone.length;

            if (phoneLength > 10) {
                return ['(', /[1-9]/, /[1-9]/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
            } else {
                return ['(', /[1-9]/, /[1-9]/, ')', ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
            }
        }

        return (
            <MaskedInput
                mask={getMask()}
                name="business_phone"
                value={fProps.values.business_phone}
                onChange={fProps.handleChange}
                onBlur={fProps.handleBlur}
                render={(ref, props) => (
                    <TextField
                        inputRef={ref}
                        {...props}
                        className={classes.textField}
                        fullWidth
                        type="text"
                        label="Telefone comercial"
                        variant="outlined"
                        disabled={busy}
                        error={fProps.errors.business_phone && fProps.touched.business_phone}
                        helperText={
                            fProps.errors.business_phone && fProps.touched.business_phone ? fProps.errors.business_phone : null
                        }
                    />
                )}
            />

        );
    }

    function renderBusinessEmailInput(fProps) {
        return (
            <TextField
                className={classes.textField}
                fullWidth
                type="text"
                label="E-mail comercial"
                variant="outlined"
                name="business_email"
                disabled={busy}
                value={fProps.values.business_email}
                error={fProps.errors.business_email && fProps.touched.business_email}
                helperText={
                    fProps.errors.business_email && fProps.touched.business_email ? fProps.errors.business_email : null
                }
                onBlur={fProps.handleBlur}
                onChange={fProps.handleChange}
            />
        );
    }

    function renderForm(fProps) {
        return (
            <form
                noValidate
                onSubmit={fProps.handleSubmit}
            >
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Informações básicas
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                {renderCompanyNameInput(fProps)}
                            </Grid>
                            <Grid item xs={12}>
                                {renderTradingNameInput(fProps)}
                            </Grid>
                            <Grid item xs={12}>
                                {renderDocumentInput(fProps)}
                            </Grid>
                            <Grid item xs={12} style={{ marginTop: '33px' }}/>

                            <Grid item xs={12}>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Contato
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                {renderBusinessPhoneInput(fProps)}
                            </Grid>
                            <Grid item xs={12}>
                                {renderBusinessEmailInput(fProps)}
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={6}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Endereço
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                {renderPostalCodeInput(fProps)}
                            </Grid>
                            <Grid item xs={12}>
                                {renderStreetInput(fProps)}
                            </Grid>
                            <Grid item xs={12}>
                                {renderNumberInput(fProps)}
                            </Grid>
                            <Grid item xs={12}>
                                {renderComplementInput(fProps)}
                            </Grid>
                            <Grid item xs={12}>
                                {renderNeighborhoodInput(fProps)}
                            </Grid>
                            <Grid item xs={12}>
                                {renderCityInput(fProps)}
                            </Grid>
                            <Grid item xs={12}>
                                {renderStateInput(fProps)}
                            </Grid>
                            <Grid item xs={12}>
                                {renderCountryInput(fProps)}
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </form>
        );
    }

    return (
        <Formik
            initialValues={props.initialValues ? props.initialValues : initialValues}
            component={renderForm}
            validationSchema={validationSchema}
            onSubmit={props.onSubmit}
            innerRef={props.innerRef}
        />
    );
}