import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { useAuth } from '../../../../components/useAuth';

interface IProps {}

const useStyles = makeStyles((theme: any) => ({
    root: {},
}));

export default function(props: IProps) {
    const classes = useStyles(props);
    const auth = useAuth();

    function getGreeting() {
        const date = new Date();
        const time = date.getHours();

        if (time < 12) {
            return('Bom dia');
        }
        if (time > 12) {
            return('Boa tarde');
        }
        if (time === 12) {
            return('Bom almoço');
        }
    }

    return (
        <div className={classes.root}>
            <Grid container alignItems="center" spacing={3}>
                <Grid item lg={6} sm={12}>
                    <Typography variant="overline" component="h2">Página inicial</Typography>
                    <Typography variant="h3" component="h1" gutterBottom>{getGreeting()}, {auth.user.first_name || 'first_name'}</Typography>
                    <Typography variant="subtitle1" component="h6" gutterBottom>Isto é o que está acontecendo na CTA hoje</Typography>
                </Grid>
                <Grid item lg={6} sm={12}>
                    <img style={{ width: '100%' }} src={require('src/modules/partner-portal/assets/img/growth_analytics.svg')} />
                </Grid>
            </Grid>
        </div>
    );
}