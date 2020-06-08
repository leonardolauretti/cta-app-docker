import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import AddressControl from './AddressControl';
import { useAccount } from 'src/modules/partner-portal/components/useAccount';

export default function(props) {
    const account = useAccount
    
    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <AddressControl
                    title="Endereço principal"
                />
            </Grid>
        </Grid>
    );
}