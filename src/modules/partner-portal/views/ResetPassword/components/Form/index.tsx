import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { Formik } from 'formik';
import * as Yup from 'yup';

interface IProps {
    busy: boolean;
    onSubmit: (data: any) => void;
    innerRef?: any;
};

const validationSchema = Yup.object().shape({

    new_password: Yup.string()
    .min(6, 'Senha muito curta')
    .max(128, 'Senha muito longa')
    .required('Por favor, insira sua nova senha'),

    new_password_confirmation: Yup.string()
    .min(6, 'Senha muito curta')
    .max(128, 'Senha muito longa')
    .required('Por favor, confirme sua nova senha')
    .oneOf([Yup.ref('newPassword')], 'As senhas não correspondem'),
});

const initialValues = {
    new_password: '',
    new_password_confirmation: '',
};

const useStyles = makeStyles((theme: any) => ({

    textField: {
        marginTop: theme.spacing(2)
    },
}));

export default function(props: IProps) {

    const classes = useStyles(props);
    const { busy, onSubmit, innerRef } = props;

    function renderNewPasswordInput(fProps) {
        return (
            <TextField
                className={classes.textField}
                fullWidth
                type="password"
                variant="outlined"
                label="Nova senha"
                name="new_password"
                disabled={busy}
                value={fProps.values.new_password}
                error={fProps.errors.new_password && fProps.touched.new_password}
                helperText={
                    fProps.errors.new_password && fProps.touched.new_password ? fProps.errors.new_password : null
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
                variant="outlined"
                label="Confirmação da nova senha"
                name="new_password_confirmation"
                disabled={busy}
                value={fProps.values.new_password_confirmation}
                error={fProps.errors.new_password_confirmation && fProps.touched.new_password_confirmation}
                helperText={
                    fProps.errors.new_password_confirmation && fProps.touched.new_password_confirmation ? fProps.errors.new_password_confirmation : null
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
                        {renderNewPasswordInput(fProps)}
                    </Grid>
                    <Grid item xs={12}>
                        {renderNewPasswordConfirmationInput(fProps)}
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