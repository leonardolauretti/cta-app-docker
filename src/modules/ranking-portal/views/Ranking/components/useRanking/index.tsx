import React, { useState, useEffect, useContext, createContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    fetchRankingAction,
} from 'src/modules/ranking-portal/ducks/root/actions';
import {
    entriesSelector,
    rankingSelector,
    createLoadingSelector,

    entriesByIdSelector,
    allEntriesIdsSelector,
    rankingsByKeySelector,
    allRankingsKeysSelector,
} from 'src/modules/ranking-portal/ducks/root/selectors';

const RANKING_MAP = [
    { label: 'Ranking geral', value: 'GeneralRanking' },
    { label: 'Módulo 1', value: 'M1ModulePerformance' },
    { label: 'Módulo 2', value: 'M2ModulePerformance' },
    { label: 'Módulo 3', value: 'M3ModulePerformance' },
    { label: 'Módulo 4', value: 'M4ModulePerformance' },
    { label: 'Módulo 5', value: 'M5ModulePerformance' },
];

const defaultValue = {
    busy: false,
    ranking: [],
    entries: [],
    onQuery: (query) => {},
    rankingMaps: RANKING_MAP,
    setActiveRanking: (value) => {},
    activeRanking: '',
};

const rankingContext = createContext(defaultValue);

export function RankingProvider({ children }) {
    const ranking = useProvideRanking();
    return <rankingContext.Provider value={ranking}>{children}</rankingContext.Provider>
}

export const useRanking = () => {
    return useContext(rankingContext);
};

function useProvideRanking() {

    const dispatch = useDispatch();
    const entriesById = useSelector(entriesByIdSelector);
    const allEntriesIds = useSelector(allEntriesIdsSelector);
    const rankingsByKey = useSelector(rankingsByKeySelector);
    const allRankingsKeys = useSelector(allRankingsKeysSelector);
    const [query, setQuery] = useState('');
    const [activeRanking, setActiveRanking] = useState('GeneralRanking');

    const busySelector = createLoadingSelector([
        'RankingPortalModule/root/FETCH_RANKING',
    ]);
    const busy = useSelector(busySelector);

    function fetchRanking() {
        const action = fetchRankingAction();
        dispatch(action);
    }

    useEffect(() => {
        fetchRanking();
    }, []);

    function normalizeText(text: string) {
        text = text.toLowerCase();
        text = text.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
        return text;
    }

    function onQuery(str: string) {
        str = normalizeText(str);
        setQuery(str);
    }

    function queryFilter(entry) {
        const firstNameMatch = normalizeText(entry.first_name).includes(query);
        const lastNameMatch = normalizeText(entry.last_name).includes(query);
        const neighborhoodMatch = normalizeText(entry.neighborhood).includes(query);
        const cityMatch = normalizeText(entry.city).includes(query);
        const stateMatch = normalizeText(entry.state).includes(query);

        return firstNameMatch || lastNameMatch || neighborhoodMatch || cityMatch || stateMatch;
    }

    function getEntryById(id: string) {

        if (!allEntriesIds.includes(id)) {
            return null;
        }

        return entriesById[id];
    }

    function getRankingByKey(key: string) {

        if (!allRankingsKeys.includes(key)) {
            return null;
        }

        return rankingsByKey[key];
    }

    function getActiveEntries() {

        if (!allRankingsKeys.includes(activeRanking)) {
            return [];
        }

        const entriesIds = rankingsByKey[activeRanking].entries;

        const entries = entriesIds.map((id) => entriesById[id]);

        console.log('entries', entries);
        return entries;
    }

    function getActiveRanking() {
        if (!allRankingsKeys.includes(activeRanking)) {
            return {};
        }

        console.log('activeRanking', rankingsByKey[activeRanking]);
        return rankingsByKey[activeRanking];
    }

    return {
        busy,

        onQuery,
        rankingMaps: RANKING_MAP,

        setActiveRanking,
        activeRanking,

        ranking: getActiveRanking(),
        entries: getActiveEntries().filter(queryFilter),


        getEntryById,
    };
}