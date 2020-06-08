import React from 'react';
import { useAccount } from 'src/modules/partner-portal/components/useAccount';
import { makeStyles } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme: any) => ({
    root: {},
}));

export default function(props) {

    const account = useAccount();
    const classes = useStyles(props);

    return (
        <div className={classes.root}>
            <Card>
                <CardHeader
                    title={
                        <Typography component="span" variant="h5">Editar empresa</Typography>
                    }
                />
                <Divider />
                <CardContent>
                    content
                </CardContent>
                <Divider />
                <CardActions style={{ padding: '16px' }}>
                    <Button
                        variant="contained"
                    >
                        Cancelar
                    </Button>
                    <Button
                        variant="contained"
                        color="primary"
                    >
                        Salvar
                    </Button>
                </CardActions>
            </Card>
        </div>
    );
}