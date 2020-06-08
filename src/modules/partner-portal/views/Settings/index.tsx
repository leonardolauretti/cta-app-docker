import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import SettingsTabs from './components/SettingsTabs';
import NotificationControl from './components/NotificationControl';

const useStyles = makeStyles((theme: any) => ({
    root: {
        padding: theme.spacing(4),
    },
    pageTitle: {
        marginBottom: theme.spacing(4),
    },
}));

export default function(props) {
    const classes = useStyles(props);

    return (
        <div className={classes.root}>
            <Container maxWidth="lg">
                <div className={classes.pageTitle}>
                    <Typography variant="overline" component="h2">
                        Gerencie suas configurações
                    </Typography>
                    <Typography variant="h3" component="h1">
                        Configurações
                    </Typography>
                </div>

                <NotificationControl />
            </Container>
        </div>
    );
}