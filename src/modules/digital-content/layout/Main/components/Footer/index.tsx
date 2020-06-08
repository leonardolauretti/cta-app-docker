import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

interface IProps {}

const useStyles = makeStyles(() => ({
    root: {},
    container: {},
    info: {
        padding: '24px 0',
    },
}));

export default function(props: IProps) {

    const classes = useStyles(props);

    return (
        <div className={classes.root}>
            <Container className={classes.container} maxWidth="lg">
                <Grid container spacing={3} direction="row" justify="center" alignItems="center">

                    <Grid item>
                        <div className={classes.info}>
                            <Typography>
                                Desenvolvido com ❤️ por{' '}
                                <Link component="a" href="https://saberdaeletronica.com.br" target="_blank">
                                    Saber da Eletrônica
                                </Link>
                            </Typography>
                        </div>
                    </Grid>

                </Grid>
            </Container>
        </div>
    );
}