import React, { useState, useEffect, useContext, createContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    fetchProfileAction,
    updateAvatarAction,
    deleteAvatarAction,
} from 'src/modules/partner-portal/ducks/account/actions';
import {
    firstNameSelector,
    lastNameSelector,
    emailSelector,
    avatarUrlSelector,
    citySelector,
    stateSelector,
    countrySelector,
    createLoadingSelector,
} from 'src/modules/partner-portal/ducks/account/selectors';

const defaultValue = {
    busy: false,
    first_name: '',
    last_name: '',
    email: '',
    avatar_url: '',
    city: '',
    state: '',
    country: '',
    updateAvatar: (data: any) => {},
    deleteAvatar: () => {},
};

const profileContext = createContext(defaultValue);

export function ProfileProvider({ children }) {
    const profile = useProvideProfile();
    return <profileContext.Provider value={profile}>{children}</profileContext.Provider>;
}

export const useProfile = () => {
    return useContext(profileContext);
};

function useProvideProfile() {
    const dispatch = useDispatch();
    const first_name = useSelector(firstNameSelector);
    const last_name = useSelector(lastNameSelector);
    const email = useSelector(emailSelector);
    const avatar_url = useSelector(avatarUrlSelector);
    const city = useSelector(citySelector);
    const state = useSelector(stateSelector);
    const country = useSelector(countrySelector);

    const busySelector = createLoadingSelector([
        'PartnerPortalModule/account/FETCH_PROFILE',
        'PartnerPortalModule/account/UPDATE_PROFILE',
        'PartnerPortalModule/account/UPDATE_AVATAR',
        'PartnerPortalModule/account/DELETE_AVATAR',
    ]);
    const busy = useSelector(busySelector);

    function fetchProfile() {
        const action = fetchProfileAction();
        dispatch(action);
    }

    useEffect(() => {
        fetchProfile();
    }, []);

    function updateAvatar(file: File) {
        const action = updateAvatarAction(file);
        dispatch(action);
    }

    function deleteAvatar() {
        const action = deleteAvatarAction();
        dispatch(action);
    }

    return {
        busy,
        first_name,
        last_name,
        email,
        avatar_url,
        city,
        state,
        country,
        updateAvatar,
        deleteAvatar,
    };
}