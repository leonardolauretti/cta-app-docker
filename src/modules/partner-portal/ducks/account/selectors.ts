import _ from 'lodash';

export const createLoadingSelector = (actions) => (state) => {
    // returns true only when all actions is not loading
    return _(actions).some((action) => _.get(state, `PartnerPortalModule.root.$loading.${action}`));
};

export const accountStateSelector = (state) => {
    return state.PartnerPortalModule.account;
}

export const profileSelector = (state) => {
    const accountState = state.PartnerPortalModule.account;
    return accountState.profile;
}

export const firstNameSelector = (state) => {
    const profile = profileSelector(state);
    return profile && profile.first_name ? profile.first_name : '';
}

export const lastNameSelector = (state) => {
    const profile = profileSelector(state);
    return profile && profile.last_name ? profile.last_name : '';
}

export const userSelector = (state) => {
    const accountState = state.PartnerPortalModule.account;
    return accountState.user;
}

export const emailSelector = (state) => {
    const user = userSelector(state);
    return user.email;
}

export const avatarUrlSelector = (state) => {
    const profile = profileSelector(state);
    return profile && profile.avatar_url ? profile.avatar_url : '';
}

export const addressSelector = (state) => {
    const accountState = state.PartnerPortalModule.account;
    return accountState.address;
}

export const citySelector = (state) => {
    const address = addressSelector(state);
    return address && address.city ? address.city : '';
}

export const stateSelector = (state) => {
    const address = addressSelector(state);
    return address && address.state ? address.state : '';
}

export const countrySelector = (state) => {
    const address = addressSelector(state);
    return address && address.country ? address.country : '';
}

export const partnerSelector = (state) => {
    return state.PartnerPortalModule.account.partner;
}

export const companiesSelector = (state) => {
    const partner = partnerSelector(state);
    return partner && partner.companies ? partner.companies : [];
};

const companiesStateSelector = (state) => {
    const companyState = state.PartnerPortalModule.account.companies;
    return companyState;
}

export const companiesByIdSelector = (state) => {
    const companiesByIds = companiesStateSelector(state).byId;
    return companiesByIds;
};

export const allCompaniesIdsSelector = (state) => {
    const allCompaniesIds = companiesStateSelector(state).allIds;
    return allCompaniesIds;
};

export const verifiedCompaniesIdsSelector = (state) => {
    const partnerCompaniesIds = partnerSelector(state).companies;
    const companiesByIds = companiesByIdSelector(state);

    return partnerCompaniesIds.filter(id => companiesByIds[id].verified);
}