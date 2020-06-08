import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Container from '@material-ui/core/Container';
import Drawer from '@material-ui/core/Drawer';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

interface IProps {
    open: boolean;
    onClose: () => void;
    data: { [key: string]: any };
}

const useStyles = makeStyles((theme: any) => ({
    root: {},

    avatar: {
        width: '128px',
        height: '128px',
    },
}));

export default function(props: IProps) {

    const { open, onClose, data } = props;
    const classes = useStyles(props);

    return (
        <Drawer
            anchor="bottom"
            open={open}
            onClose={onClose}
        >
            <Container maxWidth="lg" style={{ padding: '12px' }}>
                <Grid container spacing={3} alignItems="center">
                    <Grid item xs={3}>
                        <Avatar
                            className={classes.avatar}
                            src={data.avatar_url}
                        />
                    </Grid>
                    <Grid item xs={9}>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <Typography variant="h3">
                                    {`${data.first_name} ${data.last_name}`}
                                </Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography>
                                    <strong>Bairro:</strong>{` ${data.neighborhood}`} <br />
                                    <strong>Cidade:</strong>{` ${data.city}`} <br />
                                    <strong>Estado:</strong>{` ${data.state}`} <br />
                                </Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography>
                                    <strong>E-mail:</strong>{` ${data.email}`} <br />
                                    <strong>Telefone: </strong>
                                    {
                                        data.phone
                                        ? data.phone
                                        : 'Este estudante não possui um telefone'
                                    } <br />
                                    <strong>Currículo: </strong>
                                    {
                                        data.resume_url
                                        ? <a href={data.resume_url} target="_blank">Acessar currículo do estudante</a>
                                        : 'Este estudante não possui um currículo'
                                    } <br />
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </Drawer>
    );
}