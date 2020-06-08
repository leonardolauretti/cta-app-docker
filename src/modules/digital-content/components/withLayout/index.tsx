import React from 'react';

export function withLayout(Component: any, Layout: any) {
    
    return function ComponentWithLayout(props) {
        return (
            <Layout>
                <Component {...props} />
            </Layout>
        );
    }
}