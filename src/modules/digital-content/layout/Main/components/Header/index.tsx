import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import instructiva_logo_src from 'src/assets/img/instructiva/logo.png';

interface IProps {}

const useStyles = makeStyles(() => ({
    root: {},
    container: {},
    logo: {
        padding: '24px 0',
    },
    logo_link: {
        display: 'block',
    },
    logo_img: {
        display: 'block',
        width: '270px',
    },
}));

export default function(props: IProps) {

    const classes = useStyles(props);

    return (
        <div className={classes.root}>
            <Container className={classes.container} maxWidth="lg">
                <Grid container spacing={3} direction="row" justify="center" alignItems="center">

                    <Grid item>
                        <div className={classes.logo}>
                            <a className={classes.logo_link} href="https://instructiva.com.br?utm_source=conteudo_exclusivo" target="_blank">
                                <img className={classes.logo_img} src={instructiva_logo_src} />
                            </a>
                        </div>
                    </Grid>

                </Grid>
            </Container>
        </div>
    );
}