import React, { useState, useEffect, useContext, createContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    fetchCompaniesAction,
    createCompanyAction,
    updateCompanyAction,
    deleteCompanyAction,
} from 'src/modules/partner-portal/ducks/companies/actions';
import {
    companiesByIdSelector,
    allCompaniesIdsSelector,
    createLoadingSelector,
} from 'src/modules/partner-portal/ducks/companies/selectors';

const companiesContext = createContext(null);

export function CompaniesProvider({ children }) {
    const companies = useProvideCompanies();
    return <companiesContext.Provider value={companies}>{children}</companiesContext.Provider>;
}

export const useCompanies = () => {
    return useContext(companiesContext);
};

function useProvideCompanies() {
    const dispatch = useDispatch();

    const busySelector = createLoadingSelector([
        'PartnerPortalModule/companies/FETCH_COMPANIES',
        'PartnerPortalModule/companies/CREATE_COMPANY',
        'PartnerPortalModule/companies/UPDATE_COMPANY',
        'PartnerPortalModule/companies/DELETE_COMPANY',
    ]);
    const busy = useSelector(busySelector);

    const companiesById = useSelector(companiesByIdSelector);
    const allCompaniesIds = useSelector(allCompaniesIdsSelector);

    function fetchCompanies() {
        const action = fetchCompaniesAction();
        dispatch(action);
    }

    useEffect(() => {
        fetchCompanies();
    }, []);

    function getPartnerCompanies() {
        if (busy || !companiesById) {
            return [];
        }

        const partnerCompanies = allCompaniesIds.map(companyId => companiesById[companyId]);
        return partnerCompanies;
    }

    function createCompany(data) {
        const action = createCompanyAction(data);
        dispatch(action);
    }

    function updateCompany(id: string, data) {
        const action = updateCompanyAction(id, data);
        dispatch(action);
    }

    function deleteCompany(id: string) {
        const action = deleteCompanyAction(id);
        dispatch(action);
    }

    return {
        busy,
        companies: getPartnerCompanies(),
        createCompany,
        updateCompany,
        deleteCompany,
    };
}