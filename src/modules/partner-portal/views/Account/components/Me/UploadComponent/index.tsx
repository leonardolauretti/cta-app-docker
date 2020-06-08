import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useAccount } from 'src/modules/partner-portal/components/useAccount';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme: any) => ({
    root: {
        width: '100%',
    },
}));

export default function(props) {

    const classes = useStyles(props);
    const account = useAccount();
    const busy = account.updateAvatarLoading;

    function handleOnChange(event) {
        let file = event.currentTarget.files[0];
        console.log('File', file);
        account.uploadProfilePicture(file);
    }

    return (
        <div className={classes.root}>
            <input
                accept="image/*"
                className={'lolo'}
                style={{ display: 'none' }}
                id="raised-button-file"
                //multiple
                type="file"
                onChange={handleOnChange}
            />
            <label
                htmlFor="raised-button-file"
                style={{ width: '100%' }}
            >
                <Button component={'span'} fullWidth>
                    Alterar foto
                </Button>
            </label>
        </div>
    );
}
