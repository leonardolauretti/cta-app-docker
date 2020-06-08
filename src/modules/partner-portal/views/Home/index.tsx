import React from 'react';
import { InfoProvider } from 'src/modules/partner-portal/components/useInfo';
import Overview from './Overview';

export default function() {
    return (
        <InfoProvider>
            <Overview />
        </InfoProvider>
    );
}