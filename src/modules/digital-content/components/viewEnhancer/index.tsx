import React from 'react';
import { Redirect } from 'react-router-dom';
import { AuthProvider, useAuth } from '../useAuth';
import { withLayout } from '../withLayout';

interface IOptions {
    redirectTo?: string;
    anonymous?: boolean;
}

export function viewEnhancer(Component: any, Layout: any, options?: IOptions) {

    return function(props) {
        return (
            <AuthProvider>
                <ComponentGuard {...props} />
            </AuthProvider>
        );
    }

    function ComponentGuard(props) {
        const auth = useAuth();

        if (options && options.anonymous && auth.authenticated) {
            return (<Redirect to={options.redirectTo} />);
        }

        if (options && !options.anonymous && !auth.authenticated) {
            return (<Redirect to={options.redirectTo} />);
        }

        return withLayout(Component, Layout)(props);
    }
}