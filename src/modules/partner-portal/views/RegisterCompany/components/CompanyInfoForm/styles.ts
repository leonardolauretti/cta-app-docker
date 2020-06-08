import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: any) => ({

    root: {},

    form: {},

    title: {},

    textField: {
        marginTop: theme.spacing(2),
    },

    submitButton: {
        margin: theme.spacing(2, 0),
    },

    policy: {
        marginTop: theme.spacing(1),
        display: 'flex',
        alignItems: 'center'
    },

    policyCheckbox: {
        marginLeft: '-14px'
    },

    policyText: {},

    button: {},

    actionGroup: {},
}));