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
import PasswordForm from './PasswordForm';
import LinearProgress from '@material-ui/core/LinearProgress';

interface IProps {
    busy?: boolean;
    onPasswordChange?: (values: any) => void;
}

const useStyles = makeStyles((theme: any) => ({
    root: {},
}));

export default function(props) {
    const classes = useStyles(props);
    const { busy, onPasswordChange } = props;
    let formRef = useRef(null);

    function handlePasswordChange(values) {
        let { password, new_password } = values;
        onPasswordChange(password, new_password);
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
                        busy={busy}
                        innerRef={formRef}
                        onSubmit={handlePasswordChange}
                    />
                </CardContent>
                { busy ? <LinearProgress /> : null }
                <Divider />
                <CardActions style={{ padding: '16px' }}>
                    <Button 
                        style={{ marginLeft: 'auto' }}
                        disabled={busy}
                        variant="contained" 
                        color="primary" 
                        onClick={() => formRef.current.handleSubmit()}
                    >
                        Salvar senha
                    </Button>
                </CardActions>
            </Card>
        </div>
    );
}