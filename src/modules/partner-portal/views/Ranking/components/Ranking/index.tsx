import React from 'react';
import RankingToolbar from '../RankingToolbar';
import RankingList from '../RankingList';
import { useRanking } from 'src/modules/partner-portal/components/useRanking';

export default function(props) {
    const ranking = useRanking();

    return (
        <React.Fragment>
            <RankingToolbar
                busy={ranking.busy}
            />
            <RankingList
                busy={ranking.busy}
                rows={ranking.entries}
            />
        </React.Fragment>
    );
}