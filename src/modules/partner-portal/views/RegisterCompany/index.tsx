import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { useStyles } from './styles';
import { Typography } from '@material-ui/core';
import RegisterCompanyWizard from './components/Wizard';
import wizardService from './components/Wizard/service';

import CompanyWizard from './components/Wizard';

import Jumbotron from './components/Jumbotron';


const RegisterCompanyWizardWithService = wizardService(RegisterCompanyWizard);

export default function (props) {
    const classes = useStyles(props);
    
    return (
        <div className={classes.root}>
            <Container maxWidth="lg" style={{ background: 'white' }}>
                <Jumbotron />
                <Container maxWidth="md">
                    <Typography variant="h2">Cadastre sua empresa</Typography>
                    <CompanyWizard />
                </Container>
            </Container>
            
        </div>
    );
}