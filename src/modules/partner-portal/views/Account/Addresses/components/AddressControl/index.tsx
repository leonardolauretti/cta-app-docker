import React, { useState, useRef } from 'react';
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
import LinearProgress from '@material-ui/core/LinearProgress';

interface IProps {
    title: string;
    address?: {
        [key: string]: any;
    };
    onSave?: (values: any) => void;
    onDelete?: () => void;
    busy?: boolean;
    preloadFromPostalCode?: (postal_code: string) => void;
}

const useStyles = makeStyles((theme: any) => ({
    root: {},
}));

export default function(props: IProps) {
    const classes = useStyles(props);
    const { title, address, busy, onSave, onDelete, preloadFromPostalCode } = props;
    const [editMode, setEditMode] = useState(false);
    const formRef = useRef(null);

    console.log('Address', address);

    function handleSubmit(values) {
        formRef.current.handleSubmit();
        setEditMode(false);
    }

    function renderEditActions() {
        return (
            <React.Fragment>
                <Button
                    style={{ marginLeft: 'auto' }}
                    variant="contained"
                    color="primary"
                    onClick={handleSubmit}
                    disabled={busy}
                >
                    Salvar
                </Button>
                <Button
                    variant="contained"
                    onClick={(event) => setEditMode(false)}
                    disabled={busy}
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
                    disabled={busy}
                >
                    { address ? 'Editar endereço' : 'Cadastrar endereço' }
                </Button>
            </React.Fragment>
        );
    }

    function renderEditMode() {
        return (
            <CardContent>
                <EditAddress address={address} busy={busy} innerRef={formRef} onSave={onSave} preloadFromPostalCode={preloadFromPostalCode} />
            </CardContent>
        );
    }

    function renderViewMode() {

        if (busy) {
            return null;
        }
        
        return (
            <CardContent>
                <ViewAddress address={address} busy={busy} />
            </CardContent>
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
                { editMode ? renderEditMode() : renderViewMode() }
                { busy ? <LinearProgress /> : null }
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