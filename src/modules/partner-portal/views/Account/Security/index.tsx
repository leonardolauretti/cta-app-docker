import React from 'react';
import { SecurityProvider } from './components/useSecurity';
import Security from './Security';

export default function() {
    return (
        <SecurityProvider>
            <Security />
        </SecurityProvider>
    );
}