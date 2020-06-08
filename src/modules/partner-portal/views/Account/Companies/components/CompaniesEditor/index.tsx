import React, { useState, useRef } from 'react';

import Drawer from '@material-ui/core/Drawer';

import List from './List';



interface IProps {}

export default function(props: IProps) {

    function handleCreate() {}

    function handleDelete(id: string) {}

    function handleEdit(id: string) {}

    return (
        <React.Fragment>
            <List />
            <Drawer anchor="bottom" open={state.bottom} onClose={toggleDrawer('bottom', false)}>
                {fullList('bottom')}
            </Drawer>
        </React.Fragment>
    );
}