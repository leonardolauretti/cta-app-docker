import React from 'react';
import AddressForm from '../AddressForm';

interface IProps {
    address: {
        [key: string]: any;
    };
    busy: boolean;
    innerRef: any;
    onSave: (values: any) => void;
    preloadFromPostalCode?: (postal_code: string) => void;
}

export default function(props: IProps) {
    const { address, busy, innerRef, preloadFromPostalCode } = props;

    return (
        <div>
            <AddressForm 
                initialValues={address ? address : null}
                onSubmit={(values) => props.onSave(values)}
                busy={busy}
                innerRef={innerRef}
                onPostalCodeBlur={preloadFromPostalCode}
            />
        </div>
    );
}