import React from 'react';
import { CompaniesProvider } from './components/useCompanies';
import Companies from './Companies';

export default function() {
    return (
        <CompaniesProvider>
            <Companies />
        </CompaniesProvider>
    );
}