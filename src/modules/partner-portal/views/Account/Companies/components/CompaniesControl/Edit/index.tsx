import React, { useRef } from 'react';
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
import CompanyForm from '../CompanyForm';

interface IProps {
    company?: {
        [key: string]: any,
    },
    busy?: boolean;
}

const useStyles = makeStyles((theme: any) => ({
    root: {},
}));

export default function(props) {
    const classes = useStyles(props);
    const formRef = useRef(null);
    const { busy, onSubmit, company, onCancelClick } = props;

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
                    <CompanyForm
                        innerRef={formRef}
                        onSubmit={onSubmit}
                        busy={busy}
                        initialValues={company ? company : null}
                    />
                </CardContent>
                <Divider />
                <CardActions style={{ padding: '16px' }}>
                    <Button
                        style={{ marginLeft: 'auto' }}
                        variant="contained"
                        color="primary"
                        onClick={() => formRef.current.handleSubmit()}
                    >
                        Atualizar cadastro
                    </Button>
                    <Button
                        variant="contained"
                        onClick={onCancelClick}
                    >
                        Cancelar
                    </Button>
                </CardActions>
            </Card>
        </div>
    );
}