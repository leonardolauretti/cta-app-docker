import React, { useEffect } from 'react';
import classnames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import LinearProgress from '@material-ui/core/LinearProgress';
import ListItemPosition from './ListItemPosition';
import ListItemInfo from './ListItemInfo';
import ListItemProfissional from './ListItemProfissional';
import ListItemPerformance from './ListItemPerformance';

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
    entries: Entry[];
}

const useStyles = makeStyles((theme: any) => ({
    root: {},

    list: {},

    listItem: {
        flexDirection: 'column',
        alignItems: 'stretch',
        // Elevation 1
        boxShadow: theme.shadows[1],
        borderBottomLeftRadius: '9px',
        backgroundColor: 'white',
        marginBottom: '12px',
    },

    listItemRow: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },

    listItem_loader: {},

    progress: {
        width: '100%',

        '& .MuiLinearProgress-barColorPrimary': {
            backgroundColor: '#6bd7d7',
        },
    },

    listItemAvatar: {
        width: '48px',
        height: '48px',
    },
}));

export default function(props: IProps) {

    const classes = useStyles(props);
    const { busy, entries } = props;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [busy])


    function renderListItem(entry: Entry) {

        const performanceRow = (
            <div className={classes.listItemRow}>
                <LinearProgress className={classes.progress} variant="determinate" value={entry.performance} />
            </div>
        );

        function renderProfessional() {
            if (entry.ranking !== 'GeneralRanking') {
                return null;
            }

            if (!entry.professional_availability) {
                return null;
            }

            return (
                <ListItemProfissional
                    availability={entry.professional_availability}
                    style={{ marginLeft: 'auto', marginRight: '12px' }}
                />
            );
        }

        function renderPerformance() {
            if (entry.ranking === 'GeneralRanking') {
                return null;
            }

            return (
                <ListItemPerformance
                    performance={entry.performance}
                    style={{ marginLeft: 'auto', marginRight: '12px' }}
                />
            );
        }

        return (
            <ListItem
                key={entry.id}
                className={classes.listItem}
            >
                <div className={classes.listItemRow}>
                    <ListItemPosition>
                        {`${entry.position}°`}
                    </ListItemPosition>
                    <ListItemAvatar>
                        <Avatar
                            className={classes.listItemAvatar}
                            src={entry.avatar_url}
                        />
                    </ListItemAvatar>
                    <ListItemInfo
                        primary={`${entry.first_name} ${entry.last_name}`}
                        secondary={`${entry.neighborhood}, ${entry.city} - ${entry.state}`}
                    />
                    {renderProfessional()}
                    {renderPerformance()}
                </div>
                {/*entry.ranking === 'GeneralRanking' ? null : performanceRow*/}
            </ListItem>
        );
    }

    function renderLoader() {
        return (
            <ListItem className={classes.listItem_loader}>
                <p>RankingLoader</p>
                <LinearProgress />
            </ListItem>
        );
    }

    function renderList() {
        return (
            <List className={classes.list}>
                {
                    busy
                    ? renderLoader()
                    : entries.map((entry, index) => renderListItem(entry))
                }
            </List>
        );
    }

    return (
        <div className={classes.root}>
            {renderList()}
        </div>
    );
}