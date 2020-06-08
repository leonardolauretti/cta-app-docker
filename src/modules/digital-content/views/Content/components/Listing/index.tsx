import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';

import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';

interface IProps {
    items?: any[];
    chapters: any[];
    onLessonClick: (id: string) => void;
}

const useStyles = makeStyles((theme: any) => ({
    root: {
        width: '100%',
        backgroundColor: 'rgba(240, 240, 240, 0.15)',
        //position: 'relative',
        //overflow: 'auto',
        height: '100%',
    },
    listSection: {
        backgroundColor: 'inherit',
    },
    ul: {
        backgroundColor: 'inherit',
        padding: 0,
    },
    listSubheader: {
        backgroundColor: theme.palette.tulip_tree,
        color: theme.palette.zeus,
    },
}));

export default function PinnedSubheaderList(props: IProps) {
    const classes = useStyles();
    const { chapters, onLessonClick } = props;

    return (
        <PerfectScrollbar style={{ height: '666px' }}>
            <List className={classes.root} subheader={<li />}>
                {chapters.map(chapter => (
                <li key={`section-${chapter.id}`} className={classes.listSection}>
                    <ul className={classes.ul}>
                        <ListSubheader className={classes.listSubheader}>{`${chapter.title}`}</ListSubheader>
                        {chapter.lessons.map(lesson => (
                        <ListItem key={`item-${chapter.id}-${lesson.id}`} button onClick={(e) => onLessonClick(lesson.id)}>
                            <ListItemText
                                primary={`${lesson.title}`}
                                primaryTypographyProps={{ noWrap: true }}
                                secondary={`${lesson.description}`}
                                secondaryTypographyProps={{ noWrap: true }}
                            />
                        </ListItem>
                        ))}
                    </ul>
                </li>
                ))}
            </List>
        </PerfectScrollbar>
    );
}