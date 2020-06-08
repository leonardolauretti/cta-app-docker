import React, { useRef } from 'react';
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
import PasswordForm from './components/PasswordForm';
import { useAccount } from 'src/modules/partner-portal/components/useAccount';

const useStyles = makeStyles((theme: any) => ({
    root: {},
}));

export default function(props) {
    const classes = useStyles(props);
    let formRef = useRef(null);
    const account = useAccount();

    function handlePasswordChange(values) {
        let { password, newPassword } = values;
        account.changePassword(password, newPassword);
    }

    return (
        <div className={classes.root}>
            <Card>
                <CardHeader
                    title={
                        <Typography component="span" variant="h5">Alterar senha</Typography>
                    }
                />
                <Divider />
                <CardContent>
                    <PasswordForm 
                        innerRef={formRef}
                        onSubmit={handlePasswordChange}
                    />
                </CardContent>
                <Divider />
                <CardActions style={{ padding: '16px' }}>
                    <Button 
                        variant="contained" 
                        color="primary" 
                        onClick={() => formRef.current.handleSubmit()}
                    >
                        Salvar
                    </Button>
                </CardActions>
            </Card>
        </div>
    );
}