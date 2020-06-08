import React, { useState, useEffect, useContext, createContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    fetchNewsAction,
    fetchStatusAction,
} from 'src/modules/partner-portal/ducks/info/actions';
import {
    newsSelector,
    statusSelector,
    createLoadingSelector,
} from 'src/modules/partner-portal/ducks/info/selectors';

const infoContext = createContext(null);

export function InfoProvider({ children }) {
    const info = useProvideInfo();
    return <infoContext.Provider value={info}>{children}</infoContext.Provider>;
}

export const useInfo = () => {
    return useContext(infoContext);
};

function useProvideInfo() {
    const dispatch = useDispatch();
    const news = useSelector(newsSelector);
    const status = useSelector(statusSelector);

    const busySelector = createLoadingSelector([
        'PartnerPortalModule/info/FETCH_NEWS',
        'PartnerPortalModule/info/FETCH_STAUTS',
    ]);
    const busy = useSelector(busySelector);

    function fetchNews() {
        const action = fetchNewsAction();
        dispatch(action);
    }

    function fetchStatus() {
        const action = fetchStatusAction();
        dispatch(action);
    }

    useEffect(() => {
        fetchNews();
        fetchStatus();
    }, []);

    return {
        busy,
        news,
        status,
    };
}