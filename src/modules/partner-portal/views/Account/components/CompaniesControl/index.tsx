import React, { useState } from 'react';

import Listing from './Listing';
import Create from './Create';
import Edit from './Edit';

export default function(props) {

    const [editing, setEditing] = useState(false);
    const [creating, setCreating] = useState(false);

    function setCreationMode() {
        setCreating(true);
    }

    function setListingMode() {
        setCreating(false);
        setEditing(false);
    }

    if (editing) {
        return (
            <Edit
                onCancelClick={setListingMode}
            />
        );
    } else if (creating) {
        return (
            <Create 
                onCancelClick={setListingMode}
            />
        );
    }

    return (
        <Listing
            onCreateClick={setCreationMode}
        />
    );
}