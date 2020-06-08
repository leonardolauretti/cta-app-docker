import React, { useState, useEffect, useContext, createContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const overviewContext = createContext(null);

export function OverviewProvider({ children }) {
    const auth = useProvideOverview();
    return <overviewContext.Provider value={auth}>{children}</overviewContext.Provider>;
}

export const useOverview = () => {
    return useContext(overviewContext);
};

function useProvideOverview() {
    const dispatch = useDispatch();
    
    useEffect(() => {}, []);

    return {};
}