    import React, { useState, useEffect, useContext, createContext } from 'react';
    import { useSelector, useDispatch } from 'react-redux';
    import { authenticateAction } from 'src/modules/digital-content/ducks/root/actions';
    import { isAuthenticatedSelector } from 'src/modules/digital-content/ducks/root/selectors';

    const authContext = createContext(null);

    export function AuthProvider({ children }) {
        const auth = useProvideAuth();
        return <authContext.Provider value={auth}>{children}</authContext.Provider>;
    }

    export const useAuth = () => {
        return useContext(authContext);
    };

    interface AuthenticateData {
        access_code: string;
    }

    function useProvideAuth() {
        const dispatch = useDispatch();
        const [busy, setBusy] = useState(false);

        const authenticated = useSelector(isAuthenticatedSelector);

        useEffect(() => {}, []);

        function authenticate(data: AuthenticateData) {
            let action = authenticateAction(data);
            dispatch(action);
        }

        function disconnect() {}

        return {
            authenticated,
            authenticate,
            disconnect,
        };
    }