import React, { useState, useEffect, useContext, createContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    authenticateAction,
    registerAction,
    recoverPasswordAction,
    resetPasswordAction,
    disconnectAction,
} from '../../ducks/root/actions';
import {
    userSelector,
    tokenSelector,
    firstNameSelector,
    lastNameSelector,
    emailSelector,
    avatarUrlSelector,
    authenticatedSelector,
    createLoadingSelector,
    createErrorSelector,
} from '../../ducks/root/selectors';

const defaultValue: any = {
    busy: false,
    authenticated: false,
    user: {},
    token: '',
    first_name: '',
    last_name: '',
    email: '',
    avatar_url: '',
    register: (data: any) => {},
    authenticate: (data: any) => {},
    disconnect: () => {},
    recoverPassword: (data: any) => {},
    resetPassword: (data: any) => {},
};

const authContext = createContext(defaultValue);

export function AuthProvider({ children }) {
    const auth = useProvideAuth();
    return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = () => {
    return useContext(authContext);
};

function useProvideAuth() {
    const dispatch = useDispatch();
    const authenticated = useSelector(authenticatedSelector);
    const user = useSelector(userSelector);
    const token = useSelector(tokenSelector);
    const first_name = useSelector(firstNameSelector);
    const last_name = useSelector(lastNameSelector);
    const email = useSelector(emailSelector);
    const avatar_url = useSelector(avatarUrlSelector);

    const busySelector = createLoadingSelector([
        'PartnerPortalModule/root/AUTHENTICATE',
        'PartnerPortalModule/root/REGISTER',
        'PartnerPortalModule/root/RECOVER_PASSWORD',
        'PartnerPortalModule/root/RESET_PASSWORD',
        'PartnerPortalModule/root/DISCONNECT',
    ]);
    const busy = useSelector(busySelector);

    const errorSelector = createErrorSelector(
        'PartnerPortalModule/root/AUTHENTICATE'
    );
    const error = useSelector(errorSelector);

    useEffect(() => {}, []);

    function register(data) {
        const action = registerAction(data);
        dispatch(action);
    }

    function authenticate(data) {
        const action = authenticateAction(data);
        dispatch(action);
    }

    function disconnect() {
        const action = disconnectAction();
        dispatch(action);
    }

    function recoverPassword(data) {
        const action = recoverPasswordAction(data);
        dispatch(action);
    }

    function resetPassword(data) {
        const action = resetPasswordAction(data);
        dispatch(action);
    }

    return {
        busy,
        error,
        authenticated,
        user,
        token,
        first_name,
        last_name,
        email,
        avatar_url,
        register,
        authenticate,
        disconnect,
        recoverPassword,
        resetPassword,
    };
}