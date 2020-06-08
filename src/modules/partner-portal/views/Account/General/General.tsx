import React from 'react';
import { useProfile } from './components/useProfile';
import Grid from '@material-ui/core/Grid';
import Me from './components/Me';
import Profile from './components/Profile';

export default function() {
    const profile = useProfile();

    return (
        <Grid container spacing={3}>
            <Grid item xs={12} md={4} lg={4}>
                <Me
                    busy={profile.busy}
                    first_name={profile.first_name}
                    last_name={profile.last_name}
                    avatar_url={profile.avatar_url}
                    city={profile.city}
                    state={profile.state}
                    country={profile.country}
                    onAvatarUpdate={(file) => profile.updateAvatar(file)}
                    onAvatarDelete={() => profile.deleteAvatar()}
                />
            </Grid>
            <Grid item xs={12} md={8} lg={8}>
                <Profile
                    busy={profile.busy}
                    first_name={profile.first_name}
                    last_name={profile.last_name}
                    email={profile.email}
                />
            </Grid>
        </Grid>
    );
}