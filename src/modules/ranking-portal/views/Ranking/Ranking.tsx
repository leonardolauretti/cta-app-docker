import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';

import RankingList from './components/RankingList';
import RankingTabs from './components/RankingTabs';
import RankingToolbar from './components/RankingToolbar';
import RankingPodium from './components/RankingPodium';

import { useRanking } from './components/useRanking';

import Portal from '@material-ui/core/Portal';
import { useLayout } from 'src/modules/ranking-portal/components/useLayout';

const useStyles = makeStyles((theme: any) => ({
    root: {
        backgroundColor: '#f4f8fb',
    },
}));

export default function(props) {

    const classes = useStyles(props);
    const ranking = useRanking();
    const layout = useLayout();

    function renderTabs() {
        return (
            <Portal container={layout.appBarRef.current}>
                <RankingTabs
                    rankingMaps={ranking.rankingMaps}
                    activeRanking={ranking.activeRanking}
                    onRankingChange={ranking.setActiveRanking}
                />
            </Portal>
        );
    }

    function renderPodium() {
        return (
            <Portal container={layout.getRef('contentRef').current}>
                <RankingPodium
                    busy={ranking.busy}
                    gold={ranking.entries[0]}
                    silver={ranking.entries[1]}
                    bronze={ranking.entries[2]}
                />
            </Portal>
        );
    }

    return (
        <div className={classes.root}>

            {renderTabs()}
            {ranking.activeRanking === 'GeneralRanking' ? renderPodium() : null}

            <Container maxWidth="lg" style={{ padding: '33px 12px 12px 12px' }}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <RankingToolbar
                            busy={ranking.busy}
                            onQuery={ranking.onQuery}
                            queryValue={''}
                            rankingCreated={ranking.ranking.created}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <RankingList
                            busy={ranking.busy}
                            entries={ranking.entries}
                        />
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}