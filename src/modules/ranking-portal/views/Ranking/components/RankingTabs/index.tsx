import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

const RANKING_MAP = [
    { label: 'Ranking geral', value: 'GeneralRanking' },
    { label: 'Módulo 1', value: 'M1ModulePerformance' },
    { label: 'Módulo 2', value: 'M2ModulePerformance' },
    { label: 'Módulo 3', value: 'M3ModulePerformance' },
    { label: 'Módulo 4', value: 'M4ModulePerformance' },
    { label: 'Módulo 5', value: 'M5ModulePerformance' },
];

interface RankingMap {
    label: string;
    value: string;
}

interface IProps {
    onRankingChange: (ranking: string) => void;
    rankingMaps: RankingMap[];
    activeRanking: string;
}

const useStyles = makeStyles((theme: any) => ({
    /*'.MuiTabs-flexContainer': {
        background: '#e7eff1',
        borderRadius: '9px',
    },

    '.MuiButtonBase-root .MuiTab-root .MuiTab-textColorPrimary .Mui-selected': {
        background: 'white',
        borderRadius: '9px',
    },*/

    root: {},

    tabs: {

    },

    tab: {
        background: 'transparent',
        color: 'white',

        '&.Mui-selected': {
            color: 'white',
        }
    },

    tabIndicator: {
        backgroundColor: 'white',
    },
}));

export default function(props: IProps) {

    const classes = useStyles(props);
    const { rankingMaps, onRankingChange } = props;
    const _activeRanking = props.activeRanking;
    const [activeRanking, setActiveRanking] = useState(_activeRanking);

    function handleChange(event, value) {
        window.scrollTo(0, 0);
        setActiveRanking(value);
        onRankingChange(value);
    }

    function renderTab(rankingMap: RankingMap) {
        return (
            <Tab
                className={classes.tab}
                key={rankingMap.value}
                label={rankingMap.label}
                value={rankingMap.value}
            />
        );
    }

    function renderTabs() {
        return (
            <Tabs
                className={classes.tabs}
                value={activeRanking}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
                variant="scrollable"
                scrollButtons="auto"
                TabIndicatorProps={{ className: classes.tabIndicator }}
            >
                {rankingMaps.map((rankingMap) => renderTab(rankingMap))}
            </Tabs>
        );
    }

    return (
        <div className="root">
            {renderTabs()}
        </div>
    );
}