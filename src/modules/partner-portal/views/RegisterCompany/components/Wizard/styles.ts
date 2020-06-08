import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: any) => ({

    '.step-enter, .step-appear': {
        opacity: 0,
    },

    '.step-enter-active, .step-enter-appear,': {
        opacity: 1,
        transition: 'opacity 200ms',
    },

    '.step-exit': {
        opacity: 1,
    },
    
    '.step-exit-active': {
        opacity: 0,
        transition: 'opacity 200ms',
    },

    root: {
        minHeight: '100%',
    },

    paper: {
        overflow: 'auto',
    },

    paperContent: {
        margin: theme.spacing(3, 2),
    },

    actionsContainer: {},

    form: {},

    title: {},

    textField: {
        marginTop: theme.spacing(2),
    },

    button: {
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

}));