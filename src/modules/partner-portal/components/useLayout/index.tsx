import React, { useState, useEffect, useContext, createContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    signInAction,
    signoutAction,
    registerAction,
    authenticateAction,
    disconnectAction,
} from 'src/modules/partner-portal/ducks/auth/actions';
import {
    userSelector,
    tokenSelector,
    firstNameSelector,
    lastNameSelector,
    emailSelector,
    avatarSelector,
    allowSelector,
} from 'src/modules/partner-portal/ducks/auth/selectors';
import { useAuth } from '../useAuth';
import { Paths } from '../../module';

const defaultValue = {
    first_name: '',
    last_name: '',
    email: '',
    avatar_url: '',
    bio: 'Parceiro CTA',

    paths: Paths,

    disconnect: (event) => {},
};

const layoutContext = createContext(defaultValue);

export function LayoutProvider({ children }) {
    const layout = useProvideLayout();
    return <layoutContext.Provider value={layout}>{children}</layoutContext.Provider>;
}

export const useLayout = () => {
    return useContext(layoutContext);
};

function useProvideLayout() {
    const dispatch = useDispatch();
    const auth = useAuth();

    useEffect(() => {}, []);

    function handleDisconnect(event) {
        auth.disconnect();
    }

    return {
        first_name: auth.first_name,
        last_name: auth.last_name,
        email: auth.email,
        avatar_url: auth.avatar_url,
        bio: 'Parceiro CTA',

        disconnect: handleDisconnect,

        paths: Paths,
    };
}