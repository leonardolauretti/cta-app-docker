import _ from 'lodash';

export const createLoadingSelector = (actions) => (state) => {
    return _(actions).some((action) => _.get(state, `PartnerPortalModule.root.$loading.${action}`));
};

export const companiesStateSelector = (state) => {
    return state.PartnerPortalModule.companies;
};

export const companiesByIdSelector = (state) => {
    const companiesState = companiesStateSelector(state);
    return companiesState.companies.byId;
};

export const allCompaniesIdsSelector = (state) => {
    const companiesState = companiesStateSelector(state);
    return companiesState.companies.allIds;
};