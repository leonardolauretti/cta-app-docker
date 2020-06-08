import React, { useState } from 'react';
import classnames from 'classnames';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';
import InfoIcon from '@material-ui/icons/Info';
import CloseIcon from '@material-ui/icons/Close';
import { amber, green } from '@material-ui/core/colors';
import IconButton from '@material-ui/core/IconButton';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import WarningIcon from '@material-ui/icons/Warning';
import { makeStyles } from '@material-ui/core/styles';

const variantIcon = {
    success: CheckCircleIcon,
    warning: WarningIcon,
    error: ErrorIcon,
    info: InfoIcon,
};

interface ISnackbarContentWrapperProps {
    className?: string;
    message: string;
    onClose?: () => void;
    variant: string;
}

const useSnackbarContentWrapperStyles = makeStyles((theme: any) => ({
    success: {
        backgroundColor: green[600],
    },
    error: {
        backgroundColor: theme.palette.error.dark,
    },
    info: {
        backgroundColor: theme.palette.primary.main,
    },
    warning: {
        backgroundColor: amber[700],
    },
    icon: {
        fontSize: 20,
    },
    iconVariant: {
        opacity: 0.9,
        marginRight: theme.spacing(1),
    },
    message: {
        display: 'flex',
        alignItems: 'center',
    },
}));

function SnackbarContentWrapper(props: ISnackbarContentWrapperProps) {
    const classes = useSnackbarContentWrapperStyles(props);
    const { className, message, onClose, variant, ...other } = props;
    const Icon = variantIcon[variant];

    return (
        <SnackbarContent
            className={classnames(classes[variant], className)}
            aria-describedby="client-snackbar"
            message={
                <span id="client-snackbar" className={classes.message}>
                    <Icon className={classnames(classes.icon, classes.iconVariant)} />
                    {message}
                </span>
            }
            action={[
                <IconButton key="close" aria-label="close" color="inherit" onClick={onClose}>
                    <CloseIcon className={classes.icon} />
                </IconButton>,
            ]}
            {...other}
        />
    );
}

interface IProps {
    notifications: any[];
    dismissNotification: (index: number) => void;
}

export default function(props: IProps) {
    const { notifications } = props;

    function handleClose(index: number) {
        props.dismissNotification(index);
    }

    return (
        <React.Fragment>
            {notifications.map((notification, index) => (
                <Snackbar
                    key={index}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                    }}
                    open={true}
                    autoHideDuration={6000}
                    onClose={() => handleClose(index)}
                >
                    <SnackbarContentWrapper
                        key={index}
                        onClose={() => handleClose(index)}
                        variant={notification.variant}
                        message={notification.message}
                    />

                </Snackbar>
            ))}
        </React.Fragment>
    );
}