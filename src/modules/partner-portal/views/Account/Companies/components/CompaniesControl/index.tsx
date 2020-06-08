import React, { useState } from 'react';

import Listing from './Listing';
import Create from './Create';
import Edit from './Edit';

interface IProps {
    companies: any;
    busy: boolean;
    onCreate: (values: any) => void;
    onUpdate: (id: string, values: any) => void;
    onDelete: (id: string) => void;
}

export default function(props: IProps) {
    const { companies, busy } = props;
    const [editing, setEditing] = useState(false);
    const [creating, setCreating] = useState(false);
    const [active, setActive] = useState('');

    function setCreationMode() {
        setCreating(true);
    }

    function setListingMode() {
        setCreating(false);
        setEditing(false);
    }

    function createCompany(values) {
        props.onCreate(values);
        setCreating(false);
    }

    function updateCompany(values) {
        props.onUpdate(active, values);
        setEditing(false);
    }

    function deleteCompany(id: string) {
        props.onDelete(id);
    }

    function editCompany(id: string) {
        setActive(id);
        setEditing(true);
    }

    if (editing) {
        return (
            <Edit
                onCancelClick={setListingMode}
                onSubmit={updateCompany}
                busy={busy}
                company={companies.find((company) => company.id === active)}
            />
        );
    } else if (creating) {
        return (
            <Create
                busy={busy}
                onCancelClick={setListingMode}
                onSubmit={createCompany}
            />
        );
    }

    return (
        <Listing
            onCreateClick={setCreationMode}
            companies={companies}
            busy={busy}
            onEditClick={editCompany}
            onDeleteClick={deleteCompany}
        />
    );
}