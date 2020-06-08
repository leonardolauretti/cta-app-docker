import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SearchInput from './SearchInput';

interface IProps {
    busy?: boolean;
    onSearch?: (s: string) => void;
}

const useStyles = makeStyles((theme: any) => ({
    root: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
}));

export default function(props: IProps) {
    const classes = useStyles(props);
    const { busy, onSearch } = props;

    return (
        <div className={classes.root}>
            <SearchInput
                placeholder="Buscar por nome ou localidade"
                disabled={busy}
                onChange={(event) => onSearch(event.currentTarget.value)}
            />
        </div>
    );
}