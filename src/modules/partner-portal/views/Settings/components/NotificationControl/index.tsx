import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme: any) => ({
    root: {},
}));

export default function(props) {
    const classes = useStyles(props);

    return (
        <div className={classes.root}>
            <Card>
                <CardHeader
                    title={
                        <Typography component="span" variant="h5">Notificações</Typography>
                    }
                />
                <Divider />
                <CardContent>
                    <Grid container>
                        <Grid item xs={4}>
                            <Typography variant="h6" gutterBottom>Novidades</Typography>
                            <Typography variant="body2" gutterBottom>Você irá receber novidades e avisos da CTA</Typography>
                            <FormGroup row>
                                <FormControlLabel
                                    control={
                                        <Checkbox color="primary" checked={true} onChange={() => console.log('checkedA')} value="checkedA" />
                                    }
                                    label="E-mail"
                                />
                            </FormGroup>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography variant="h6" gutterBottom>Sistema</Typography>
                            <Typography variant="body2" gutterBottom>Você irá receber notificações do sistema no seu e-mail</Typography>
                            <FormGroup row>
                                <FormControlLabel
                                    control={
                                        <Checkbox color="primary" checked={true} onChange={() => console.log('checkedA')} value="checkedA" />
                                    }
                                    label="E-mail"
                                />
                            </FormGroup>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography variant="h6" gutterBottom>Caixa de entrada</Typography>
                            <Typography variant="body2" gutterBottom>Você irá receber notificações sobre novas mensagens</Typography>
                            <FormGroup row>
                                <FormControlLabel
                                    control={
                                        <Checkbox color="primary" checked={true} onChange={() => console.log('checkedA')} value="checkedA" />
                                    }
                                    label="E-mail"
                                />
                            </FormGroup>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </div>
    );
}