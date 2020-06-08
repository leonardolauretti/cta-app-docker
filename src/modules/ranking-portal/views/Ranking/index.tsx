import React from 'react';
import { RankingProvider } from './components/useRanking';
import Ranking from './Ranking';

export default function() {
    return (
        <RankingProvider>
            <Ranking />
        </RankingProvider>
    );
}