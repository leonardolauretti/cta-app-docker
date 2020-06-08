import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useAccount } from 'src/modules/partner-portal/components/useAccount';
import Button from '@material-ui/core/Button';

interface IProps {
    onSelect?: (file: File) => void;
    busy: boolean;
}

const useStyles = makeStyles((theme: any) => ({
    root: {
        width: '100%',
    },
}));

export default function(props: IProps) {
    const classes = useStyles(props);
    const { onSelect, busy } = props;

    function handleOnChange(event) {
        let file = event.currentTarget.files[0];
        console.log('File', file);
        onSelect(file);
    }

    return (
        <div className={classes.root}>
            <input
                accept="image/*"
                style={{ display: 'none' }}
                id="raised-button-file"
                type="file"
                onChange={handleOnChange}
                disabled={busy}
            />
            <label
                htmlFor="raised-button-file"
                style={{ width: '100%' }}
            >
                <Button
                    fullWidth
                    component={'span'}
                    disabled={busy}
                >
                    Alterar foto
                </Button>
            </label>
        </div>
    );
}
