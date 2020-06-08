import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: any) => ({

    stepContent: {
        padding: '30px',
    },

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
        backgroundColor: theme.palette.background.default,
        height: '100%'
    },

    grid: {
        height: '100%'
    },

    splashContainer: {
        [theme.breakpoints.down('md')]: {
            display: 'none'
        },
        backgroundImage: 'url(' + require('src/assets/img/agustin-diaz-7F65HDP0-E0-unsplash.jpg') + ')',
        backgroundSize: 'cover',
    },

    content: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
    },

    contentHeader: {
        display: 'flex',
        alignItems: 'center',
        paddingTop: theme.spacing(5),
        paddingBototm: theme.spacing(2),
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2)
    },

    contentBody: {
        flexGrow: 1,
        display: 'flex',
        alignItems: 'center',
        [theme.breakpoints.down('md')]: {
            justifyContent: 'center'
        },
        paddingLeft: 100,
        paddingRight: 100,
        paddingBottom: 125,
        flexBasis: 700,
        [theme.breakpoints.down('sm')]: {
            paddingLeft: theme.spacing(2),
            paddingRight: theme.spacing(2)
        }
    },
}));