import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { Formik } from 'formik';
import * as Yup from 'yup';

interface IProps {
    innerRef?: any;
    onSubmit: (values: any) => void;
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

    newPassword: Yup.string()
    .min(6, 'Senha muito curta')
    .max(128, 'Senha muito longa')
    .required('Por favor, insira sua nova senha'),

    newPasswordConfirmation: Yup.string()
    .min(6, 'Senha muito curta')
    .max(128, 'Senha muito longa')
    .required('Por favor, confirme sua nova senha')
    .oneOf([Yup.ref('newPassword')], 'As senhas não correspondem'),
});

const initialValues = {
    password: '',
    newPassword: '',
    newPasswordConfirmation: '',
};

export default function(props: IProps) {
    const classes = useStyles(props);

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
                name="newPassword"
                value={fProps.values.newPassword}
                error={fProps.errors.newPassword && fProps.touched.newPassword}
                helperText={
                    fProps.errors.newPassword && fProps.touched.newPassword ? fProps.errors.newPassword : null
                }
                onBlur={fProps.handleBlur}
                onChange={fProps.handleChange}
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
                name="newPasswordConfirmation"
                value={fProps.values.newPasswordConfirmation}
                error={fProps.errors.newPasswordConfirmation && fProps.touched.newPasswordConfirmation}
                helperText={
                    fProps.errors.newPasswordConfirmation && fProps.touched.newPasswordConfirmation ? fProps.errors.newPasswordConfirmation : null
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