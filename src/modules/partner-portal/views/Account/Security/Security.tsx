import React from 'react';
import Grid from '@material-ui/core/Grid';
import PasswordControl from './components/PasswordControl';
import { useSecurity } from './components/useSecurity';

export default function() {
    const security = useSecurity();

    function handlePasswordChange(values) {
        const { password, new_password } = values;
        security.changePassword(password, new_password);
    }

    return (
        <Grid container spacing={3}>
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <PasswordControl
                    busy={security.busy}
                    onPasswordChange={handlePasswordChange}
                />
            </Grid>
        </Grid>
    );
}