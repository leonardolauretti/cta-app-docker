import React from 'react';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import PinIcon from '@material-ui/icons/PinDrop';
import { makeStyles } from '@material-ui/styles';

interface IProps {
    address: {
        [key: string]: any;
    };
    busy: boolean;
}

const useStyles = makeStyles((theme: any) => ({
    root: {},

    empty: {
        padding: '33px 0',
        textAlign: 'center',
    },

    emptyIcon: {
        fontSize: '66px',
    },
}));

export default function(props: IProps) {
    const classes = useStyles(props);
    const { address, busy } = props;

    function empty() {

        if (busy) {
            return null;
        }

        return (
            <div className={classes.empty}>
                <PinIcon className={classes.emptyIcon}/>
                <Typography variant='h4'>
                    Endreço não cadastrado
                </Typography>
            </div>
        );
    }

    function view() {

        if (busy) {
            return null;
        }
        
        return (
            <div>
                <Typography>
                    <strong>CEP:</strong>&nbsp;{address.postal_code}
                    <br></br>
                    <strong>Logradouro:</strong>&nbsp;{address.street}
                    <br></br>
                    <strong>Número:</strong>&nbsp;{address.number}
                    <br></br>
                    {
                        address.complement
                        ? <React.Fragment><strong>Complemento:</strong>&nbsp;{address.complement}<br></br></React.Fragment>
                        : null
                    }
                    <strong>Bairro:</strong>&nbsp;{address.neighborhood}
                    <br></br>
                    <strong>Cidade:</strong>&nbsp;{address.city}
                    <br></br>
                    <strong>Estado:</strong>&nbsp;{address.state}
                </Typography>
            </div>
        );
    }

    return (
        <div>
            {
                address
                ? view()
                : empty()
            }
        </div>
    );
}