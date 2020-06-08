import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import { useAuth } from 'src/modules/digital-content/components/useAuth';
import SignInForm from './components/SignInForm';

const useStyles = makeStyles((theme: any) => ({

    root: {
        display: 'flex',
        flexFlow: 'column',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },

    container: {},
}));

export default function(props) {

    const classes = useStyles(props);
    const auth = useAuth();

    return (
        <div className={classes.root}>

            <Container maxWidth="lg">
                <Grid container spacing={3} justify="center" alignItems="center">

                    <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                        <Typography variant="h2" gutterBottom>
                            Acessar conteúdo exclusivo
                        </Typography>
                        <Typography variant="body1" gutterBottom style={{ color: 'white' }}>
                            Para acessar, por favor, use o código de 10 dígitos que está localizado na contra-capa do livro <strong>Fontes Chaveadas: Tudo sobre topologia Flyback</strong>
                        </Typography>
                        <SignInForm
                            onSubmit={(values) => auth.authenticate(values)}
                        />
                    </Grid>

                </Grid>
            </Container>
        </div>
    );
}