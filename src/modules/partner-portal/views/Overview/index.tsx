import React from 'react';
import { InfoProvider } from 'src/modules/partner-portal/components/useInfo';
import { AccountProvider } from 'src/modules/partner-portal/components/useAccount';
import Overview from './Overview';

export default function() {
    return (
        <AccountProvider>
            <InfoProvider>
                <Overview />
            </InfoProvider>
        </AccountProvider>
    );
}