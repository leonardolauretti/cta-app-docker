import React, { useState } from 'react';
import Datatable from '../Datatable';
import RankingListDatatable from '../RankingListDatatable';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

interface IProps {
    rows: {
        id: string;
        first_name: string;
        last_name: string;
        avatar_url: string;
        neighborhood: string;
        city: string;
        state: string;
    }[];
    busy?: boolean;
    onRowClick: (id: string) => void;
}

const useStyles = makeStyles((theme: any) => ({
    root: {
        minHeight: '300px',
        width: '100%'
    },
}));

export default function(props: IProps) {
    const classes = useStyles(props);

    const [selectedEntry, setSelectedEntry] = useState('');

    function handleEntryClick(id: string) {
        setSelectedEntry(id);
        props.onRowClick(id);
    }

    if (props.busy) {
        return (<LinearProgress />);
    } else {
        return (
            <div className={classes.root}>
                <RankingListDatatable rows={props.rows} onRowClick={handleEntryClick} />
            </div>
        );
    }
}