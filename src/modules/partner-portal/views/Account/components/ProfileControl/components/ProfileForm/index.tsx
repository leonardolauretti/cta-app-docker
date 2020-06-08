import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { Formik } from 'formik';

interface IProps {
    initialValues?: any;
    onSubmit?: (values: any) => void;
}

const useStyles = makeStyles((theme: any) => ({
    root: {},
    textField: {
        marginTop: theme.spacing(2),
    },
}));

const initialValues = {
    first_name: '',
    last_name: '',
    email: '',
};

export default function(props: IProps) {
    const classes = useStyles(props);

    function renderFirstNameInput(fProps) {
        return (
            <TextField
                className={classes.textField}
                disabled={true}
                fullWidth
                type="text"
                label="Primeiro nome"
                variant="outlined"
                name="first_name"
                value={fProps.values.first_name}
            />
        );
    }

    function renderLastNameInput(fProps) {
        return (
            <TextField
                className={classes.textField}
                disabled={true}
                fullWidth
                type="text"
                label="Último nome"
                variant="outlined"
                name="last_name"
                value={fProps.values.last_name}
            />
        );
    }

    function renderEmailInput(fProps) {
        return (
            <TextField
                className={classes.textField}
                disabled={true}
                fullWidth
                type="text"
                label="E-mail"
                variant="outlined"
                name="email"
                value={fProps.values.email}
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
                    <Grid item xs={12}>
                        {renderFirstNameInput(fProps)}
                    </Grid>
                    <Grid item xs={12}>
                        {renderLastNameInput(fProps)}
                    </Grid>
                    <Grid item xs={12}>
                        {renderEmailInput(fProps)}
                    </Grid>
                </Grid>
            </form>
        );
    }

    return (
        <Formik
            initialValues={props.initialValues ? props.initialValues : initialValues}
            component={renderForm}
            onSubmit={props.onSubmit}
        ></Formik>
    );
}