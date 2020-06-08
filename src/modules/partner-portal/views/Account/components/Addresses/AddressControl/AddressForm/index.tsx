import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { Formik } from 'formik';
import * as Yup from 'yup';

interface IProps {
    innerRef?: any;
    onSubmit: (values: any) => void;
    initialValues?: any;
}

const useStyles = makeStyles((theme: any) => ({
    root: {},
    textField: {
        marginTop: theme.spacing(2),
    },
}));

const validationSchema = Yup.object().shape({

    postalCode: Yup.string()
    .min(8, 'CEP inválido')
    .max(8, 'CEP inválido')
    .required('Por favor, insira seu CEP'),

    street: Yup.string()
    .min(6, 'Logradouro inválido')
    .max(254, 'Logradouro inválido')
    .required('Por favor, insira o logradouro'),

    number: Yup.number()
    .required('Por favor, insira o número'),

    //complement: Yup.string(),

    neighborhood: Yup.string()
    .required('Por favor, insira o bairro'),

    city: Yup.string()
    .required('Por favor, insira a cidade'),

    state: Yup.string()
    .required('Por favor, insira o estado'),

    //country: Yup.string()
    //.required('Por favor, insira o país'),
});

const initialValues = {
    postalCode: '',
    street: '',
    number: '',
    complement: '',
    neighborhood: '',
    city: '',
    state: '',
    country: 'Brasil',
};

export default function(props: IProps) {
    const classes = useStyles(props);

    function renderPostalCodeInput(fProps) {
        return (
            <TextField
                className={classes.textField}
                fullWidth
                type="text"
                label="CEP"
                variant="outlined"
                name="postalCode"
                value={fProps.values.postalCode}
                error={fProps.errors.postalCode && fProps.touched.postalCode}
                helperText={
                    fProps.errors.postalCode && fProps.touched.postalCode ? fProps.errors.postalCode : null
                }
                onBlur={fProps.handleBlur}
                onChange={fProps.handleChange}
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

    function renderForm(fProps) {
        return (
            <form
                noValidate
                onSubmit={fProps.handleSubmit}
            >
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        {renderPostalCodeInput(fProps)}
                    </Grid>
                    <Grid item xs={6}>
                        {renderStreetInput(fProps)}
                    </Grid>
                    <Grid item xs={6}>
                        {renderNumberInput(fProps)}
                    </Grid>
                    <Grid item xs={6}>
                        {renderComplementInput(fProps)}
                    </Grid>
                    <Grid item xs={6}>
                        {renderNeighborhoodInput(fProps)}
                    </Grid>
                    <Grid item xs={6}>
                        {renderCityInput(fProps)}
                    </Grid>
                    <Grid item xs={6}>
                        {renderStateInput(fProps)}
                    </Grid>
                    <Grid item xs={6}>
                        {renderCountryInput(fProps)}
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
        ></Formik>
    );
}