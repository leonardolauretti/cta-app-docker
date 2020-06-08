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
import LinearProgress from '@material-ui/core/LinearProgress';
import ProfileForm from './ProfileForm';

interface IProps {
    first_name: string;
    last_name: string;
    email: string;
    busy: string;
}

const useStyles = makeStyles((theme: any) => ({
    root: {},
}));

export default function(props) {
    const classes = useStyles(props);
    const { first_name, last_name, email, busy } = props;

    function renderProfileForm() {

        if (busy) {
            return null;
        }

        return (
            <CardContent>
                <ProfileForm
                    initialValues={{
                        first_name: first_name,
                        last_name: last_name,
                        email: email,
                    }}
                />
            </CardContent>
        );
    }

    return (
        <div className={classes.root}>
            <Card>
                <CardHeader
                    title={
                        <Typography component="span" variant="h5">Perfil</Typography>
                    }
                    subheader={'Para alterar estas informações, entre em contato com a CTA Eletrônica'}
                />
                <Divider />
                { renderProfileForm() }
                { busy ? <LinearProgress /> : null }
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