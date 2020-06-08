import React, { useState, useEffect, useContext, createContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
    fetchAddressAction,
    updateAddressAction,
    preloadAddressAction,
} from 'src/modules/partner-portal/ducks/account/actions';

import {
    addressSelector,
    createLoadingSelector,
} from 'src/modules/partner-portal/ducks/account/selectors';

const addressContext = createContext(null);

export function AddressProvider({ children }) {
    const address = useProvideAddress();
    return <addressContext.Provider value={address}>{children}</addressContext.Provider>;
}

export const useAddress = () => {
    return useContext(addressContext);
};

function useProvideAddress() {
    const dispatch = useDispatch();

    const address = useSelector(addressSelector);

    const busySelector = createLoadingSelector([
        'partner/account/FETCH_ADDRESS',
        'partner/account/UPDATE_ADDRESS',
        'partner/account/PRELOAD_ADDRESS',
    ]);
    const busy = useSelector(busySelector);

    function fetchAddress() {
        let action = fetchAddressAction();
        dispatch(action);
    }

    useEffect(() => {
        fetchAddress();
    }, []);

    function updateAddress(address) {
        let action = updateAddressAction(address);
        dispatch(action);
    }

    return {
        busy,
        address,
        updateAddress,
    };
}