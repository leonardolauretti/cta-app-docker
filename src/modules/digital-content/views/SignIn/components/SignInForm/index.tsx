import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { Formik } from 'formik';
import * as Yup from 'yup';

interface IProps {
    initialValues?: any;
    onSubmit: (values: any) => void;
    busy?: boolean;
}

const useStyles = makeStyles((theme: any) => ({
    root: {},
    textField: {
        marginTop: theme.spacing(2),
    },

    cssOutlinedInput: {
        '&$cssFocused $notchedOutline': {
            borderColor: `${theme.palette.primary.main} !important`,
        }
    },

    cssFocused: {},

    notchedOutline: {
        borderWidth: '1px',
        borderColor: `${theme.palette.primary.main} !important`,
    },
}));

const initialValues = {
    access_code: '',
};

const validationSchema = Yup.object().shape({

    access_code: Yup.string()
    .min(10, 'Código de acesso muito curto')
    .max(10, 'Código de acesso muito longo')
    .required('Por favor, insira o código de acesso'),
});

export default function(props: IProps) {
    const classes = useStyles(props);
    const { busy } = props;

    function renderAccessCodeInput(fProps) {
        return (
            <TextField
                className={classes.textField}
                disabled={busy}
                fullWidth
                type="password"
                label="Código de acesso"
                variant="outlined"
                name="access_code"
                value={fProps.values.access_code}
                error={fProps.errors.access_code && fProps.touched.access_code}
                helperText={
                    fProps.errors.access_code && fProps.touched.access_code ? fProps.errors.access_code : null
                }
                onBlur={fProps.handleBlur}
                onChange={fProps.handleChange}
                inputProps={{ style: { borderColor: '#8e6929'} }}
                InputProps={{
                    classes: {
                        root: classes.cssOutlinedInput,
                        focused: classes.cssFocused,
                        notchedOutline: classes.notchedOutline,
                    },
                }}
            />
        );
    }

    function renderForm(fProps) {
        return (
            <form
                noValidate
                onSubmit={fProps.handleSubmit}
            >
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        {renderAccessCodeInput(fProps)}
                    </Grid>
                    <Grid item xs={12}>
                        <Button variant="contained" color="primary" fullWidth onClick={() => fProps.handleSubmit()}>
                            Acessar conteúdo exclusivo
                        </Button>
                    </Grid>
                </Grid>
            </form>
        );
    }

    return (
        <Formik
            initialValues={props.initialValues ? props.initialValues : initialValues}
            component={renderForm}
            onSubmit={(values) => props.onSubmit(values)}
            validationSchema={validationSchema}
        />
    );
}