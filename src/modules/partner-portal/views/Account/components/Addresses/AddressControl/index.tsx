import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import EditAddress from './Edit';
import ViewAddress from './View';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/AddCircle';

interface IProps {
    title: string;
    address?: {
        [key: string]: any;
    };
    onSubmit?: (values: any) => void;
}

const useStyles = makeStyles((theme: any) => ({
    root: {},
}));

export default function(props: IProps) {
    const classes = useStyles(props);
    const { title, address } = props;
    const [editMode, setEditMode] = useState(false);

    function renderEditActions() {
        return (
            <React.Fragment>
                <Button
                    style={{ marginLeft: 'auto' }}
                    variant="contained"
                    color="primary"
                    onClick={(event) => console.log(event)}
                >
                    Salvar
                </Button>
                <Button
                    variant="contained"
                    onClick={(event) => setEditMode(false)}
                >
                    Descartar
                </Button>
            </React.Fragment>
        );
    }

    function renderViewActions() {
        return (
            <React.Fragment>
                <Button
                    style={{ marginLeft: 'auto' }}
                    variant="contained"
                    color="primary"
                    onClick={(event) => setEditMode(true)}
                >
                    { address ? 'Editar endereço' : 'Cadastrar endereço' }
                </Button>
            </React.Fragment>
        );
    }

    return (
        <div className={classes.root}>
            <Card>
                <CardHeader
                    title={
                        <Typography component="span" variant="h5" gutterBottom={true}>
                            {title}
                        </Typography>
                    }
                />
                <Divider />
                <CardContent>
                    {
                        editMode
                        ? <EditAddress address={address} />
                        : <ViewAddress address={address} />
                    }
                </CardContent>
                <Divider />
                <CardActions style={{ padding: '16px' }}>
                    {
                        editMode
                        ? renderEditActions()
                        : renderViewActions()
                    }
                </CardActions>
            </Card>
        </div>
    );
}