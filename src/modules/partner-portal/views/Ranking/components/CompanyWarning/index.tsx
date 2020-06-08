import React, { forwardRef } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { Paths } from 'src/modules/partner-portal/module';

const useStyles = makeStyles((theme: any) => ({
    root: {
        padding: theme.spacing(4, 0),
    },

    figure: {
        display: 'block',
        fontSize: '6rem',
    },
}));

const CustomRouterLink = forwardRef((props: any, ref: any) => (
    <div ref={ref}>
        <NavLink
            {...props}
            to={props.to}
        />
    </div>
));

export default function(props) {
    const classes = useStyles(props);
    const history = useHistory();

    return (
        <div className={classes.root}>
            <Container maxWidth="lg" style={{ padding: '12px' }}>
                <Grid container spacing={3} direction="row" alignItems="center">
                    <Grid item style={{ flexGrow: 1 }}>
                        <Typography variant="h3" component="h1" gutterBottom>
                            Parece que você ainda não terminou de cadastrar sua empresa
                        </Typography>
                        <Typography variant="subtitle1" component="h6">
                            Para ter acesso aos recursos de parceiro da CTA Eletrônica, por favor, continue o cadastro da empresa.
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Button
                            variant="contained"
                            color="primary"
                            size="large"
                            //component={CustomRouterLink}
                            //to={Paths.ACCOUNT_COMPANIES}
                            onClick={() => history.push(Paths.ACCOUNT_COMPANIES)}
                        >
                            Cadastrar empresa
                        </Button>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}