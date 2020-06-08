import React from 'react';
import { useAddresses } from './components/useAddresses';
import AddressControl from './components/AddressControl';

export default function() {

    const addresses = useAddresses();

    return (
        <div className="rooter">
            <AddressControl
                title="Endereço principal"
                address={addresses.address}
                busy={addresses.busy}
                onSave={addresses.updateAddress}
                onDelete={() => console.log()}
            />
        </div>
    );
}