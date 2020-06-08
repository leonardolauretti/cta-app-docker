import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';
import ProfileForm from './components/ProfileForm';
import { useAccount } from 'src/modules/partner-portal/components/useAccount';

const useStyles = makeStyles((theme: any) => ({
    root: {},
}));

export default function(props) {
    const classes = useStyles(props);
    const account = useAccount();

    return (
        <div className={classes.root}>
            <Card>
                <CardHeader
                    title={
                        <Typography component="span" variant="h5">Perfil</Typography>
                    }
                />
                <Divider />
                <CardContent>
                    <ProfileForm
                        initialValues={{
                            first_name: account.first_name,
                            last_name: account.last_name,
                            email: account.email,
                        }}
                    />
                </CardContent>
                <Divider />
                <CardActions style={{ padding: '16px' }}>
                    <Button
                        style={{ marginLeft: 'auto' }}
                        variant="contained"
                        color="primary"
                        disabled
                    >
                        Salvar
                    </Button>
                </CardActions>
            </Card>
        </div>
    );
}