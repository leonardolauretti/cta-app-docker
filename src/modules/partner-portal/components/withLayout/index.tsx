import React from 'react';
import { LayoutProvider } from '../useLayout';

export function withLayout(Component: any, Layout: any) {

    return function ComponentWithLayout(props) {
        return (
            <LayoutProvider>
                <Layout>
                    <Component {...props} />
                </Layout>
            </LayoutProvider>
        );
    }
}