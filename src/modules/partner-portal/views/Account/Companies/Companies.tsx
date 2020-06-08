import React from 'react';
import { useCompanies } from './components/useCompanies';
import CompaniesControl from './components/CompaniesControl';

export default function() {
    const companies = useCompanies();

    return (
        <CompaniesControl
            busy={companies.busy}
            companies={companies.companies}
            onCreate={(data) => companies.createCompany(data)}
            onUpdate={(id, data) => companies.updateCompany(id, data)}
            onDelete={(id) => companies.deleteCompany(id)}
        />
    );
}