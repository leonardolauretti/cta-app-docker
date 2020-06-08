import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FilledInput from '@material-ui/core/FilledInput';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import CancelIcon from '@material-ui/icons/Cancel';
import SearchIcon from '@material-ui/icons/Search';
import FaceIcon from '@material-ui/icons/Face';
import InfoIcon from '@material-ui/icons/Info';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button';
import moment from 'moment';
import Typography from '@material-ui/core/Typography';
import LinearProgress from '@material-ui/core/LinearProgress';
import CircularProgress from '@material-ui/core/CircularProgress';

moment.locale('pt-br');

interface IProps {
    busy: boolean;
    onQuery: (value) => void;
    queryValue: string;
    rankingCreated: string;
}

const useStyles = makeStyles((theme: any) => ({

    root: {
        //padding: '12px',
    },
}));

export default function(props: IProps) {

    const classes = useStyles(props);
    const { queryValue, onQuery, rankingCreated, busy } = props;
    const [value, setValue] = useState(queryValue);

    let typingTimer;
    const doneTypingInterval = 954;

    function handleChange(newValue) {
        setValue(newValue);
        clearTimeout(typingTimer);
        typingTimer = setTimeout(() => onQuery(newValue), doneTypingInterval);
    }

    function renderInputAdornment() {
        return (
            <InputAdornment position="end">
                <IconButton
                    onClick={() => handleChange('')}
                >
                    <CancelIcon />
                </IconButton>
            </InputAdornment>
        );
    }

    function renderSearchField() {

        if (busy) {
            return null;
        }

        return (
            <FormControl variant="outlined" style={{ width: '100%' }}>
                <OutlinedInput
                    fullWidth
                    value={value}
                    placeholder="Comece a digitar para iniciar a busca"
                    onChange={(event) => handleChange(event.currentTarget.value)}
                    endAdornment={value === '' ? null : renderInputAdornment()}
                    startAdornment={
                        <InputAdornment position="start">
                            <SearchIcon />
                        </InputAdornment>
                    }
                />
            </FormControl>
        );
    }

    function renderStatus() {

        if (busy) {
            return (
                <div style={{ textAlign: 'center' }}>
                    <LinearProgress color="secondary" size={33} />
                </div>
            );
        }

        const fromNow = moment.utc(rankingCreated).local().fromNow();

        return (
            <div style={{ textAlign: 'left' }}>
                <Typography variant="caption" style={{ display: 'block' }}>
                    O ranking é recalculado a cada 1 hora<br />
                    {`Última atualização: ${fromNow}`}
                </Typography>
            </div>
        );
    }

    function renderActions() {
        return (
            <div style={{ textAlign: 'left' }}>
                <a href="#" style={{ display: 'block' }}>
                    <Typography variant="caption">
                    Área do estudante
                    </Typography>
                </a>

                <a href="#" style={{ display: 'block' }}>
                    <Typography variant="caption">
                    Portal de empresas
                    </Typography>
                </a>
            </div>
        );
    }

    function renderHelp() {
        return (
            <div style={{ textAlign: 'left' }}>
                <IconButton>
                    <InfoIcon />
                </IconButton>
            </div>
        );
    }

    return (
        <div className={classes.root}>
            <Grid container spacing={3} justify="center" alignContent="center" alignItems="center">
                <Grid item style={{ flexGrow: 1 }}>
                    {renderSearchField()}
                </Grid>
                <Grid item style={{ marginLeft: 'auto' }}>
                    {renderStatus()}
                </Grid>
                <Grid item>
                    {renderActions()}
                </Grid>
                <Grid item>
                    {renderHelp()}
                </Grid>
            </Grid>
        </div>
    );
}