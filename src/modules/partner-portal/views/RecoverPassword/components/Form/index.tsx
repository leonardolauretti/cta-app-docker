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

    email: Yup.string()
    .email('E-mail inválido')
    .required('Por favor, insira seu email'),
});

const initialValues = {
    email: '',
};

const useStyles = makeStyles((theme: any) => ({

    textField: {
        marginTop: theme.spacing(2)
    },
}));

export default function(props: IProps) {

    const classes = useStyles(props);
    const { busy, onSubmit, innerRef } = props;

    function renderEmailInput(fProps) {
        return (
            <TextField
                className={classes.textField}
                fullWidth
                type="text"
                variant="outlined"
                label="E-mail"
                name="email"
                disabled={busy}
                value={fProps.values.email}
                error={fProps.errors.email && fProps.touched.email}
                helperText={
                    fProps.errors.email && fProps.touched.email ? fProps.errors.email : null
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
                        {renderEmailInput(fProps)}
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