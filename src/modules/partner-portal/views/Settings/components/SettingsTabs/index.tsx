import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Divider from '@material-ui/core/Divider';

export default function(props) {

    return (
        <div style={{ marginBottom: '24px' }}>
            <Tabs value={0} style={{ marginTop: '24px' }}>
                <Tab label="Geral" />
                <Tab label="Segurança" />
            </Tabs>
            <Divider style={{ backgroundColor: '#e0e0e0' }}/>
        </div>
    );
}