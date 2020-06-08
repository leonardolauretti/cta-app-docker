import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { useStyles } from './styles';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';

import CompanyInfoForm from '../Forms/CompanyInfo';
import CompanyAddressForm from '../Forms/CompanyAddress';
import ReviewCompanyInfo from '../ReviewCompanyInfo';
import { useFormik } from 'formik';

interface IProps {
    onSubmit: (values) => void;
}

const validationSchema = {

};

const initialValues = {

};

export default function(props) {

    const classes = useStyles(props);
    const [activeStep, setActiveStep] = useState(0);

    const formik = useFormik({
        initialValues: initialValues,
        onSubmit: props.onSubmit,
        validationSchema: validationSchema,
    });

    function companyInfoStep(fProps) {
        return ();
    }

    function companyAddressStep(fProps) {
        return ();
    }

    function renderForm() {
        return (
            <form
                onSubmit={formik.handleSubmit}
                noValidate
            >
                <Stepper
                    activeStep={activeStep}
                    orientation="vertical"
                >
                    <Step>
                        <StepLabel>Informações básicas</StepLabel>
                        <StepContent>
                            <CompanyInfoForm />
                        </StepContent>
                    </Step>

                    <Step>
                        <StepLabel>Endereço</StepLabel>
                        <StepContent>
                            <CompanyAddressForm />
                        </StepContent>
                    </Step>

                </Stepper>
            </form>
        );
    }

    return (
        <div className={classes.root}>
            {renderStepper()}
        </div>
    );
}