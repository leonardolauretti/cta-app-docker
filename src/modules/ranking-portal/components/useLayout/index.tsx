import React, { useState, useEffect, useContext, createContext, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
/*
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
*/
import { Paths } from '../../module';

const defaultElement = () => {
    return (
        <p>Default Component</p>
    );
}

const defaultValue = {
    /*first_name: '',
    last_name: '',
    email: '',
    avatar_url: '',
    bio: 'Parceiro CTA',
    disconnect: (event) => {},*/
    paths: Paths,
    refs: {},
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
    const refs = useState({});
    const appBarRef = React.useRef(null);
    const contentRef = React.useRef(null);

    useEffect(() => {}, []);

    function getRef(key: string) {

        if (!refs[key]) {
            refs[key] = useRef(null);
        }

        return refs[key];
    }

    return {
        paths: Paths,
        appBarRef,
        contentRef,
        getRef,
    };
}