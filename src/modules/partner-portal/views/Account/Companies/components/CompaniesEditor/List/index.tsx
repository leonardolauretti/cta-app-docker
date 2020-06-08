import React, { useState } from 'react';
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
import DomainIcon from '@material-ui/icons/Domain';
import AddIcon from '@material-ui/icons/AddCircle';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import LinearProgress from '@material-ui/core/LinearProgress';

interface IProps {
    onCreateClick?: () => void;
    onEditClick?: (id: string) => void;
    busy: boolean;
    companies: any[];
}

const useStyles = makeStyles((theme: any) => ({
    root: {},

    empty: {
        padding: '33px 0',
        textAlign: 'center',
    },

    emptyIcon: {
        fontSize: '66px',
    },

    list: {},
}));

export default function(props) {
    const { companies, onEditClick, busy } = props;
    const classes = useStyles(props);

    const [deleteDialogVisibility, setDeleteDialogVisibility] = useState(false);

    function empty() {

        if (busy) {
            return null;
        }

        return (
            <CardContent>
                <div className={classes.empty}>
                    <DomainIcon className={classes.emptyIcon}/>
                    <Typography variant='h4'>
                        Nenhuma empresa cadastrada
                    </Typography>
                </div>
            </CardContent>
        );
    }

    function list() {
        if (busy) {
            return null;
        }
        
        return (
            <CardContent>
                <div className={classes.list}>
                    <List disablePadding>
                        {companies.map(renderListItem)}
                    </List>
                </div>
            </CardContent>
        );
    }

    function renderListItem(company) {
        return (
            <ListItem key={company.id}>
                <ListItemAvatar>
                    <Avatar>
                        <DomainIcon />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText
                    primary={company.company_name}
                    secondary={company.trading_name}
                />
                <ListItemSecondaryAction>
                    <IconButton
                        aria-label="edit"
                        onClick={() => onEditClick(company.id)}
                    >
                        <EditIcon />
                    </IconButton>
                    <IconButton
                        edge="end"
                        aria-label="delete"
                        onClick={() => setDeleteDialogVisibility(true)}
                    >
                        <DeleteIcon />
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
        );
    }

    function renderDeleteDialog() {
        return (
            <Dialog
                open={deleteDialogVisibility}
                onClose={() => setDeleteDialogVisibility(false)}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Você realmente deseja remover esta empresa?"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Ao remover uma empresa, todos os dados e registros serão também removidos. Tem certeza de que quer prosseguir?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setDeleteDialogVisibility(false)} color="primary">
                        Cancelar
                    </Button>
                    <Button onClick={() => setDeleteDialogVisibility(false)} color="primary" autoFocus>
                        Remover empresa
                    </Button>
                </DialogActions>
            </Dialog>
        );
    }

    return (
        <div className={classes.root}>
            <Card>
                <CardHeader
                    title={
                        <Typography component="span" variant="h5">Empresas</Typography>
                    }
                    subheader="Empresas vinculadas a sua conta de parceiro"
                />
                <Divider />
                { !companies || companies.length === 0 ? empty() : list() }
                { busy ? <LinearProgress /> : null }
                <Divider />
                <CardActions style={{ padding: '16px' }}>
                    <Button
                        style={{ marginLeft: 'auto' }}
                        variant="contained"
                        color="primary"
                        onClick={props.onCreateClick}
                        disabled={props.busy}
                    >
                        Cadastrar nova empresa
                    </Button>
                </CardActions>
            </Card>
            {renderDeleteDialog()}
        </div>
    );
}