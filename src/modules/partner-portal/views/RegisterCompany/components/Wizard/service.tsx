import React, { useState } from 'react';
import { initialValues as companyInfoInitialValues } from '../Forms/CompanyInfo';
import { initialValues as companyAddressInitialValues } from '../Forms/CompanyAddress';

const initialValues = {
    ...companyInfoInitialValues,
    ...companyAddressInitialValues,
};

interface IValues {
    [field: string]: any,
}

export default function WizardService(Component: any) {

    return function HOC(props) {

        const [databag, setDatabag] = useState(initialValues);

        function handleSetFields(values: IValues) {
            const newDatabag = { ...databag, ...values };
            setDatabag(newDatabag);
        }

        return (
            <Component
                values={databag}
                setFields={handleSetFields}
            />
        );
    }
}