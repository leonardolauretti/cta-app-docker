import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useStyles } from './styles';

interface CompanyData {
    companyName: string;
    tradingName: string;
    document: string;
    postalCode: string;
    street: string;
    number: string;
    complement: string;
    neighborhood: string;
    city: string;
    state: string;
    country: string;
}

interface IProps {
    data?: CompanyData;
    busy?: boolean;
}

export default function(props: IProps) {

    const classes = useStyles(props);

    return (
        <div>
            <Typography
                className={classes.title}
                variant="h2"
            >
                Confirmar informações
            </Typography>
            <Typography
                color="textSecondary"
                gutterBottom
            >
                Verifique as informações da sua empresa antes de registrá-la
            </Typography>
            <Button
                className={classes.submitButton}
                color="primary"
                disabled={props.busy}
                fullWidth
                size="large"
                type="submit"
                variant="contained"
            >
                Enviar
            </Button>
        </div>
    );
}