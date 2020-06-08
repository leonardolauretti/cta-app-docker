import React from 'react';
import { ProfileProvider } from './components/useProfile';
import General from './General';

export default function() {
    return (
        <ProfileProvider>
            <General />
        </ProfileProvider>
    );
}