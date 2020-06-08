import React, { useState, useEffect, useContext, createContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
    fetchProfileAction,
    updateAddressAction,
} from 'src/modules/partner-portal/ducks/account/actions';

import {
    addressSelector,
    createLoadingSelector,
} from 'src/modules/partner-portal/ducks/account/selectors';

const initialValues = {
    busy: false,
    address: null,
    updateAddress: (data) => {},
};

const addressesContext = createContext(initialValues);

export function AddressesProvider({ children }) {
    const addresses = useProvideAddresses();
    return <addressesContext.Provider value={addresses}>{children}</addressesContext.Provider>;
}

export const useAddresses = () => {
    return useContext(addressesContext);
};

function useProvideAddresses() {

    const dispatch = useDispatch();
    const address = useSelector(addressSelector);

    const busySelector = createLoadingSelector([
        'partner/account/FETCH_PROFILE',
        'partner/account/FETCH_ADDRESS',
        'partner/account/UPDATE_ADDRESS',
    ]);
    const busy = useSelector(busySelector);

    function fetchProfile() {
        const action = fetchProfileAction();
        dispatch(action);
    }

    useEffect(() => {
        fetchProfile();
    }, []);

    function updateAddress(data) {
        const action = updateAddressAction(data);
        dispatch(action);
    }

    return {
        busy,
        address,
        updateAddress,
    };
}