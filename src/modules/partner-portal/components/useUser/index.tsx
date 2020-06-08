import React, { useState, useEffect, useContext, createContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { signInAction, signoutAction } from 'src/modules/partner-portal/ducks/auth/actions';
import { userSelector, tokenSelector } from 'src/modules/partner-portal/ducks/auth/selectors';

const userContext = createContext(null);

export function UserProvider({ children }) {
    const user = useProvideUser();
    return <userContext.Provider value={user}>{children}</userContext.Provider>;
}

export const useAuth = () => {
    return useContext(userContext);
};

interface User {
    firstName: string;
    lastName: string;
    email: string;
}

function useProvideUser() {
    const dispatch = useDispatch();
    const user: User = useSelector(userSelector);
    const token = useSelector(tokenSelector);

    const signin = ({email, password}) => {
        console.log('Email', email);
        console.log('Password', password);
        dispatch(signInAction({ email, password }));
    };

    const signout = () => {
        dispatch(signoutAction());
    };

    useEffect(() => {

    }, []);

    async function register(first_name: string, last_name: string, email: string, password: string) {}

    
    async function authenticate(email: string, password: string) {}

    return {
        user,
        token,
        signin,
        signout,
    };
}