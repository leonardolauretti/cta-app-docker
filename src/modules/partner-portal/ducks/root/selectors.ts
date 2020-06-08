import _ from 'lodash';

export const createLoadingSelector = (actions) => (state) => {
    // returns true only when all actions is not loading
    return _(actions).some((action) => {
        return _.get(state, `PartnerPortalModule.root.$loading.${action}`);
    });
};

export const createErrorSelector = (action) => (state) => {
    const error = _.get(state, `PartnerPortalModule.root.$error.${action}`);
    return error ? error.message : null;
};

export const authenticatedSelector = (state) => {
    const user = state.PartnerPortalModule.root.user;
    return user.$authenticated ? true : false;
};

export const userSelector = (state) => {
    const user = state.PartnerPortalModule.root.user;
    return user ? user : null;
};

export const tokenSelector = (state) => {
    const user = userSelector(state);
    return user.token ? user.token : null;
};

export const firstNameSelector = (state) => {
    const user = userSelector(state);
    return user.first_name ? user.first_name : null;
}

export const lastNameSelector = (state) => {
    const user = userSelector(state);
    return user.last_name ? user.last_name : null;
}

export const emailSelector = (state) => {
    const user = userSelector(state);
    return user.email ? user.email : null;
}

export const avatarUrlSelector = (state) => {
    const user = userSelector(state);
    return user.avatar_url ? user.avatar_url : null;
}