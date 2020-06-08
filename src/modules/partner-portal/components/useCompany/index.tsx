import React, { useState, useEffect, useContext, createContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
    fetchCompaniesAction,
    createCompanyAction,
    updateCompanyAction,
    deleteCompanyAction,
} from 'src/modules/partner-portal/ducks/account/actions';

import {
    companiesSelector,
    createLoadingSelector,
} from 'src/modules/partner-portal/ducks/account/selectors';

const companyContext = createContext(null);

export function CompanyProvider({ children }) {
    const company = useProvideCompany();
    return <companyContext.Provider value={company}>{children}</companyContext.Provider>;
}

export const useCompany = () => {
    return useContext(companyContext);
};

function useProvideCompany() {
    const dispatch = useDispatch();

    const companies = useSelector(companiesSelector);

    const busySelector = createLoadingSelector([
        'partner/account/FETCH_COMPANIES',
        'partner/account/UPDATE_COMPANY',
        'partner/account/DELETE_COMPANY',
    ]);
    const busy = useSelector(busySelector);

    function fetchCompanies() {
        let action = fetchCompaniesAction();
        dispatch(action);
    }

    useEffect(() => {
        fetchCompanies();
    }, []);

    function create(data: any) {
        console.log('Data', data);
        let action = createCompanyAction(data);
        dispatch(action);
    }

    function update(id: string, data: any) {
        let action = updateCompanyAction(id, data);
        dispatch(action);
    }

    function delete(id: string) {
        let action = deleteCompanyAction(id);
        dispatch(action);
    }
    
    return {
        busy,
        companies,
        create,
        update,
        delete,
    };
}