import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';

import Jumbotron from './components/Jumbotron';
import Stats from './components/Stats';
import News from './components/News';
import PageTitle from 'src/modules/partner-portal/components/PageTitle';
import CompanyWarning from 'src/modules/partner-portal/components/CompanyWarning';
import VerifiedCompanyWarning from 'src/modules/partner-portal/components/VerifiedCompanyWarning';

import { useInfo } from 'src/modules/partner-portal/components/useInfo';
import { useAccount } from 'src/modules/partner-portal/components/useAccount';

const useStyles = makeStyles((theme: any) => ({
    root: {
        position: 'relative',
    },

    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },

    backdropRoot: {},
}));

export default function(props) {
    const classes = useStyles(props);
    const info = useInfo();
    const account = useAccount();

    if (account.busy) {
        return (
            <div className={classes.root}>
                <Backdrop classes={{ root: classes.backdropRoot }} className={classes.backdrop} open={account.busy}>
                    <CircularProgress color="inherit" />
                </Backdrop>
            </div>
        );
    }

    function renderContent() {

        if (!account.hasCompanies) {
            return (<CompanyWarning />);
        }

        if (!account.hasVerifiedCompanies) {
            return (<VerifiedCompanyWarning />);
        }

        return (
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Stats status={info.status} busy={info.busy} />
                </Grid>
                <Grid item xs={12}>
                    <News busy={info.busy} entries={info.news} />
                </Grid>
            </Grid>
        );
    }

    return (
        <div className={classes.root}>
            <Container maxWidth="lg" style={{ padding: '12px' }}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Jumbotron />
                    </Grid>
                    <Grid item xs={12}>
                        {renderContent()}
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}