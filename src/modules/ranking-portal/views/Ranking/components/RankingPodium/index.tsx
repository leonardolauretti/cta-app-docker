import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import Badge from '@material-ui/core/Badge';
import StarsIcon from '@material-ui/icons/Star';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import electric_background_src from 'src/assets/img/cta_electric.jpeg';

interface Entry {
    id: string,
    first_name: string;
    last_name: string;
    avatar_url?: string;
    neighborhood: string;
    city: string;
    state: string;
    country: string;
    ranking: string;
    performance?: number;
    position?: number;
    professional_availability: boolean;
};

interface IProps {
    busy: boolean;
    gold: Entry;
    silver: Entry;
    bronze: Entry;
    style?: any;
};

const useStyles = makeStyles((theme: any) => ({

    root: {},

    textPrimary: {
        color: 'white',
        fontWeight: 'bold',
        marginTop: '21px',
    },

    content: {
        backgroundImage: `url(${electric_background_src})`,
        backgroundSize: 'cover',
        backgroundColor: '#0a0349',
        backgroundPosition: 'top',
        color: 'white',
        padding: '33px 24px 33px 24px',
    },

    expansionPanel: {
        backgroundColor: '#0a0349',
        backgroundImage: `url(${electric_background_src})`,
        backgroundSize: 'cover',
        color: 'white',
    },

    expansionPanel_heading: {
        color: 'white',
        fontWeight: 'bold',
    },

    expansionPanel_icon: {
        color: 'white',
    },

    badgeAvatar: {
        // Elevation 3
        boxShadow: theme.shadows[3],
    },
}));

export default function(props: IProps) {
    const { busy, gold, silver, bronze } = props;
    const classes = useStyles(props);

    function renderBadgeContent(color: string) {
        return (
            <Avatar className={classes.badgeAvatar} style={{ backgroundColor: color }}>
                <StarsIcon style={{ color: '#00000069' }}/>
            </Avatar>
        );
    }

    function renderPosition(entry: Entry, color: string, first = false) {

        const ready = !busy && entry;

        return (
            <Grid container direction="column" alignItems="center" alignContent="center" justify="center">
                <Grid item xs={12}>
                    <Badge
                        overlap="circle"
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'right',
                        }}
                        badgeContent={renderBadgeContent(color)}
                    >
                        <Avatar
                            alt={ready ? entry.first_name : undefined}
                            src={ready ? entry.avatar_url : undefined}
                            style={{
                                width: first ? '128px' : '97px',
                                height: first ? '128px' : '97px',
                                border: '3px solid white',
                            }}
                        />
                    </Badge>
                </Grid>
                <Grid item xs={12}>
                    <Typography
                        className={classes.textPrimary}
                        variant="body1"
                        noWrap={true}
                    >
                        {
                            ready
                            ? `${entry.first_name}`
                            : 'Carregando...'
                        }
                    </Typography>
                </Grid>
            </Grid>
        );
    }

    function renderPodium() {
        return (
            <Grid container spacing={6} alignItems="flex-end" alignContent="center" justify="center">
                <Grid item>
                    {renderPosition(silver, '#c0c0c0')}
                </Grid>
                <Grid item>
                    {renderPosition(gold, '#ffd700', true)}
                </Grid>
                <Grid item>
                    {renderPosition(bronze, '#f4a460')}
                </Grid>
            </Grid>
        );
    }

    return (
        <div className={classes.root} style={props.style}>
            <div className={classes.content}>
                {renderPodium()}
            </div>
        </div>
    );
}