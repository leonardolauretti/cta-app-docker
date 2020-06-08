import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { Formik } from 'formik';
import * as Yup from 'yup';

interface IProps {
    innerRef?: any;
    onSubmit: (values: any) => void;
    busy?: boolean;
}

const useStyles = makeStyles((theme: any) => ({
    root: {},
    textField: {
        marginTop: theme.spacing(2),
    },
}));

const validationSchema = Yup.object().shape({

    password: Yup.string()
    .required('Por favor, insira sua senha atual'),

    new_password: Yup.string()
    .min(6, 'Senha muito curta')
    .max(128, 'Senha muito longa')
    .required('Por favor, insira sua nova senha'),

    new_password_confirmation: Yup.string()
    .min(6, 'Senha muito curta')
    .max(128, 'Senha muito longa')
    .required('Por favor, confirme sua nova senha')
    .oneOf([Yup.ref('new_password')], 'As senhas não correspondem'),
});

const initialValues = {
    password: '',
    new_password: '',
    new_password_confirmation: '',
};

export default function(props: IProps) {
    const classes = useStyles(props);
    const { busy } = props;

    function renderPasswordInput(fProps) {
        return (
            <TextField
                className={classes.textField}
                fullWidth
                type="password"
                label="Senha atual"
                variant="outlined"
                name="password"
                value={fProps.values.password}
                error={fProps.errors.password && fProps.touched.password}
                helperText={
                    fProps.errors.password && fProps.touched.password ? fProps.errors.password : null
                }
                onBlur={fProps.handleBlur}
                onChange={fProps.handleChange}
                disabled={busy}
            />
        );
    }

    function renderNewPasswordInput(fProps) {
        return (
            <TextField
                className={classes.textField}
                fullWidth
                type="password"
                label="Nova senha"
                variant="outlined"
                name="new_password"
                value={fProps.values.new_password}
                error={fProps.errors.new_password && fProps.touched.new_password}
                helperText={
                    fProps.errors.new_password && fProps.touched.new_password ? fProps.errors.new_password : null
                }
                onBlur={fProps.handleBlur}
                onChange={fProps.handleChange}
                disabled={busy}
            />
        );
    }

    function renderNewPasswordConfirmationInput(fProps) {
        return (
            <TextField
                className={classes.textField}
                fullWidth
                type="password"
                label="Confirmação da nova senha"
                variant="outlined"
                name="new_password_confirmation"
                value={fProps.values.new_password_confirmation}
                error={fProps.errors.new_password_confirmation && fProps.touched.new_password_confirmation}
                helperText={
                    fProps.errors.new_password_confirmation && fProps.touched.new_password_confirmation ? fProps.errors.new_password_confirmation : null
                }
                onBlur={fProps.handleBlur}
                onChange={fProps.handleChange}
                disabled={busy}
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
                    <Grid item xs={12} sm={4}>
                        {renderPasswordInput(fProps)}
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        {renderNewPasswordInput(fProps)}
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        {renderNewPasswordConfirmationInput(fProps)}
                    </Grid>
                </Grid>
            </form>
        );
    }

    return (
        <Formik
            initialValues={initialValues}
            component={renderForm}
            validationSchema={validationSchema}
            onSubmit={props.onSubmit}
            innerRef={props.innerRef}
        ></Formik>
    );
}