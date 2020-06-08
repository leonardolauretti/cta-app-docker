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
import AddressForm from './components/AddressForm';
import { useAccount } from 'src/modules/partner-portal/components/useAccount';

const useStyles = makeStyles((theme: any) => ({
    root: {},
}));

export default function(props) {
    const classes = useStyles(props);
    const formRef = useRef(null);
    const account = useAccount();

    let initialValues = {
        postalCode: account.address.postal_code || '',
        street: account.address.street || '',
        number: account.address.number || '',
        complement: account.address.complement || '',
        neighborhood: account.address.neighborhood || '',
        city: account.address.city || '',
        state: account.address.state || '',
        country: account.address.country || '',
    };

    function handleAddressUpdate(values) {
        let {
            postalCode,
            street,
            number,
            complement,
            neighborhood,
            city,
            state,
            country,
        } = values;

        account.updateAddress(
            postalCode,
            street,
            number,
            complement,
            neighborhood,
            city,
            state,
            country,
        );
    }

    return (
        <div className={classes.root}>
            <Card>
                <CardHeader
                    title={
                        <Typography component="span" variant="h5">Endereço</Typography>
                    }
                />
                <Divider />
                <CardContent>
                    <AddressForm 
                        innerRef={formRef}
                        onSubmit={handleAddressUpdate}
                        initialValues={initialValues}
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