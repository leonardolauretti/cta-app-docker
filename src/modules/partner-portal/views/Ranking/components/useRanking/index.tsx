import React, { useState, useEffect, useContext, createContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    fetchRankingAction,
} from 'src/modules/partner-portal/ducks/ranking/actions';
import {
    entriesByIdSelector,
    allEntriesIdsSelector,
    rankingSelector,
    createLoadingSelector,
} from 'src/modules/partner-portal/ducks/ranking/selectors';

const defaultValue = {
    busy: false,
    entries: [],
    onQuery: (query) => {},
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
    const [query, setQuery] = useState('');
    const entriesById = useSelector(entriesByIdSelector);
    const allEntriesIds = useSelector(allEntriesIdsSelector);
    const ranking = useSelector(rankingSelector);

    const busySelector = createLoadingSelector([
        'PartnerPortalModule/ranking/FETCH_RANKING',
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

    function getEntries() {
        const entriesIds = ranking.entries;
        const entries = entriesIds.map((id) => entriesById[id]);

        return entries;
    }

    function getEntryInfo(id: string) {
        if (busy || !entriesById || id === '') {
            return {};
        }

        const entry = entriesById[id];

        return {
            id: entry.id,
            first_name: entry.first_name,
            last_name: entry.last_name,
            avatar_url: entry.avatar_url,
            neighborhood: entry.neighborhood,
            city: entry.city,
            state: entry.state,
            email: entry.email,
            phone: entry.phone,
            resume_url: entry.resume_url,
        };
    }

    return {
        busy,
        ranking,
        entries: getEntries().filter(queryFilter),
        onQuery,
        getEntryInfo,
    };
}