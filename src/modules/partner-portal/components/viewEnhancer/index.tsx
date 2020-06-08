import React from 'react';
import { Redirect } from 'react-router-dom';
import { AuthProvider, useAuth } from '../useAuth';
import { LayoutProvider } from '../useLayout';
import { withLayout } from '../withLayout';

interface IOptions {
    redirectTo?: string;
    anonymous?: boolean;
}

export default function(Component: any, Layout: any, options?: IOptions) {

    return (props) => {
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