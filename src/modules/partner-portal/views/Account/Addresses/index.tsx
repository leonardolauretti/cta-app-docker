import React from 'react';
import { AddressesProvider } from './components/useAddresses';
import Addresses from './Addresses';

export default function() {
    return (
        <AddressesProvider>
            <Addresses />
        </AddressesProvider>
    );
}