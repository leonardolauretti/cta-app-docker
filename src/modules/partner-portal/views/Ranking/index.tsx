import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import { RankingProvider } from './components/useRanking';
import { AccountProvider } from 'src/modules/partner-portal/components/useAccount';
import Ranking from './Ranking';

import PageTitle from 'src/modules/partner-portal/components/PageTitle';

const useStyles = makeStyles((theme: any) => ({
    root: {},
}));

export default function(props) {

    const classes = useStyles(props);

    return (
        <AccountProvider>
            <RankingProvider>
                <div className={classes.root}>
                    <Container maxWidth="lg" style={{ padding: '12px' }}>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <PageTitle
                                    title="Ranking de técnicos"
                                    subtitle="Técnicos disponíveis para oportunidades"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Ranking />
                            </Grid>
                        </Grid>
                    </Container>
                </div>
            </RankingProvider>
        </AccountProvider>
    );
}