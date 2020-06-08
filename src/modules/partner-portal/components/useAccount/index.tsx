import React, { useState, useEffect, useContext, createContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    changePasswordAction,
    fetchProfileAction,
    updateAvatarAction,
    deleteAvatarAction,
    updateAddressAction,
    createCompanyAction,
    updateCompanyAction,
    deleteCompanyAction,
} from 'src/modules/partner-portal/ducks/account/actions';
import {
    firstNameSelector,
    lastNameSelector,
    emailSelector,
    avatarUrlSelector,
    citySelector,
    stateSelector,
    countrySelector,
    companiesSelector,
    createLoadingSelector,
    verifiedCompaniesIdsSelector,
} from 'src/modules/partner-portal/ducks/account/selectors';

const defaultValue = {
    busy: false,
    first_name: '',
    last_name: '',
    email: '',
    avatar_url: '',
    city: '',
    state: '',
    country: '',
    changePassword: (data: any) => {},
    updateAvatar: (data: any) => {},
    deleteAvatar: () => {},
    updateAddress: (data: any) => {},
    createCompany: (data) => {},
    updateCompany: (data) => {},
    deleteCompany: (data) => {},

    hasCompanies: false,
    hasVerifiedCompanies: false,
};

const accountContext = createContext(defaultValue);

export function AccountProvider({ children }) {
    const account = useProvideAccount();
    return <accountContext.Provider value={account}>{children}</accountContext.Provider>;
}

export const useAccount = () => {
    return useContext(accountContext);
};

function useProvideAccount() {
    const dispatch = useDispatch();
    const first_name = useSelector(firstNameSelector);
    const last_name = useSelector(lastNameSelector);
    const email = useSelector(emailSelector);
    const avatar_url = useSelector(avatarUrlSelector);
    const city = useSelector(citySelector);
    const state = useSelector(stateSelector);
    const country = useSelector(countrySelector);

    const busySelector = createLoadingSelector([
        'PartnerPortalModule/account/FETCH_PROFILE',
        'PartnerPortalModule/account/UPDATE_PROFILE',
        'PartnerPortalModule/account/UPDATE_AVATAR',
        'PartnerPortalModule/account/DELETE_AVATAR',
        'PartnerPortalModule/account/CHANGE_PASSWORD',
        'PartnerPortalModule/account/FETCH_ADDRESS',
        'PartnerPortalModule/account/UPDATE_ADDRESS',
        'PartnerPortalModule/account/FETCH_COMPANIES',
        'PartnerPortalModule/account/CREATE_COMPANY',
        'PartnerPortalModule/account/UPDATE_COMPANY',
        'PartnerPortalModule/account/DELETE_COMPANY',
    ]);
    const busy = useSelector(busySelector);

    const partnerCompanies = useSelector(companiesSelector);
    const hasCompanies = partnerCompanies.length > 0 ? true : false;

    const partnerVerifiedCompanies = useSelector(verifiedCompaniesIdsSelector);
    const hasVerifiedCompanies = partnerVerifiedCompanies.length > 0 ? true : false;

    function fetchProfile() {
        const action = fetchProfileAction();
        dispatch(action);
    }

    useEffect(() => {
        fetchProfile();
    }, []);

    function updateAvatar(file: File) {
        const action = updateAvatarAction(file);
        dispatch(action);
    }

    function deleteAvatar() {
        const action = deleteAvatarAction();
        dispatch(action);
    }

    function changePassword(password: string, new_password: string) {
        const action = changePasswordAction(password, new_password);
        dispatch(action);
    }

    function updateAddress(data) {
        const action = updateAddressAction(data);
        dispatch(action);
    }

    function createCompany(data) {
        const action = createCompanyAction(data);
        dispatch(action);
    }

    function updateCompany(id, data) {
        const action = updateCompanyAction(id, data);
        dispatch(action);
    }

    function deleteCompany(data) {
        const action = deleteCompanyAction(data);
        dispatch(action);
    }

    return {
        busy,

        hasCompanies,
        hasVerifiedCompanies,

        first_name,
        last_name,
        email,
        avatar_url,
        city,
        state,
        country,
        changePassword,
        updateAvatar,
        deleteAvatar,
        updateAddress,
        createCompany,
        updateCompany,
        deleteCompany,
    };
}