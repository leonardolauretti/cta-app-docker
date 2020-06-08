import React, { useState, useEffect, useContext, createContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    changePasswordAction,
} from 'src/modules/partner-portal/ducks/account/actions';
import {
    createLoadingSelector,
} from 'src/modules/partner-portal/ducks/account/selectors';

const defaultValue = {
    busy: false,
    changePassword: (currentPassword: string, newPassword: string) => {},
};

const securityContext = createContext(defaultValue);

export function SecurityProvider({ children }) {
    const security = useProvideSecurity();
    return <securityContext.Provider value={security}>{children}</securityContext.Provider>;
}

export const useSecurity = () => {
    return useContext(securityContext);
};

function useProvideSecurity() {
    const dispatch = useDispatch();

    const busySelector = createLoadingSelector([
        'PartnerPortalModule/account/CHANGE_PASSWORD',
    ]);
    const busy = useSelector(busySelector);

    useEffect(() => {}, []);

    function changePassword(currentPassword, newPassword) {
        const action = changePasswordAction(currentPassword, newPassword);
        dispatch(action);
    }

    return {
        busy,
        changePassword,
    };
}