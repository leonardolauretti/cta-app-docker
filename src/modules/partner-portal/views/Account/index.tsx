import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Switch, Route } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

import AccountTabs from './components/AccountTabs';
import GeneralView from './General';
import AddressesView from './Addresses';
import CompaniesView from './Companies';
import SecurityView from './Security';

import { AccountProvider } from 'src/modules/partner-portal/components/useAccount';
import { Paths } from '../../module';

const useStyles = makeStyles((theme: any) => ({
    root: {},

    pageTitle: {
        //marginTop: theme.spacing(3),
        marginBottom: theme.spacing(0),
    },

    gridWrapper: {
        margin: theme.spacing(2),
    },
}));

export default function(props) {
    const classes = useStyles(props);

    return (
        <AccountProvider>
            <div className={classes.root}>

                <Container maxWidth="lg" style={{ padding: '12px' }}>
                    <Grid container spacing={3}>

                        <Grid item xs={12}>
                            <div className={classes.pageTitle}>
                                <Typography variant="overline" component="h2">
                                    Características da sua conta
                                </Typography>
                                <Typography variant="h3" component="h1">
                                    Conta
                                </Typography>
                            </div>
                        </Grid>

                        <Grid item xs={12}>
                            <AccountTabs
                                tabs={[
                                    { label: 'Geral', value: `${Paths.ACCOUNT}` },
                                    { label: 'Endereços', value: `${Paths.ACCOUNT}/Addresses` },
                                    { label: 'Empresas', value: `${Paths.ACCOUNT}/Companies` },
                                    { label: 'Segurança', value: `${Paths.ACCOUNT}/Security` },
                                ]}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <Switch>
                                <Route path={`${Paths.ACCOUNT}`} exact={true} component={GeneralView} />
                                <Route path={`${Paths.ACCOUNT}/Addresses`} exact={true} component={AddressesView} />
                                <Route path={`${Paths.ACCOUNT}/Companies`} exact={true} component={CompaniesView} />
                                <Route path={`${Paths.ACCOUNT}/Security`} exact={true} component={SecurityView} />
                            </Switch>
                        </Grid>

                    </Grid>
                </Container>

            </div>
        </AccountProvider>
    );
}