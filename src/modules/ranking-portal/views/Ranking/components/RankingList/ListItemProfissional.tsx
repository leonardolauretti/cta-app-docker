import React from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import WorkIcon from '@material-ui/icons/Work';
import Chip from '@material-ui/core/Chip';
import Hidden from '@material-ui/core/Hidden';

interface IProps {
    availability: boolean;
    style?: any;
}

const useStyles = makeStyles((theme: any) => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },

    icon: {
        color: '#546e7a',
    },

    text: {},
}));

export default function(props: IProps) {

    const classes = useStyles(props);
    const { availability, style } = props;
    const history = useHistory();

    function renderAvailability() {
        return (
            <div className={classes.root} style={style}>
                <Hidden mdDown>
                    <Chip
                        color="primary"
                        icon={<WorkIcon />}
                        label="Profissional disponível"
                        onClick={() => history.push('/PartnerPortal')}
                    />
                </Hidden>
                <Hidden lgUp>
                    <Chip
                        color="primary"
                        icon={<WorkIcon />}
                        onClick={() => history.push('/PartnerPortal')}
                    />
                </Hidden>
            </div>
        );
    }

    return availability ? renderAvailability() : null;
}