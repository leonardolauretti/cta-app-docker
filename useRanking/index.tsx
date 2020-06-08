import React, { useState, useEffect, useContext, createContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    fetchRankingAction,
} from '../../ducks/ranking/actions';
import {
    entriesSelector,
    createLoadingSelector,
} from '../../ducks/ranking/selectors';

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

    const busySelector = createLoadingSelector([
        'PartnerPortalModule/ranking/FETCH_RANKING',
    ]);
    const busy = useSelector(busySelector);

    const entries = useSelector(entriesSelector);

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

    return {
        busy,
        entries: entries.filter(queryFilter),
        onQuery,
    };
}