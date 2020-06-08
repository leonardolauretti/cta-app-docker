import _ from 'lodash';

export const createLoadingSelector = (actions) => (state) => {
    // returns true only when all actions is not loading
    return _(actions).some((action) => {
        return _.get(state, `PartnerPortalModule.root.$loading.${action}`);
    });
};

export const newsSelector = (state) => {
    const infoState = state.PartnerPortalModule.info;
    return infoState.news;
};

export const statusSelector = (state) => {
    const infoState = state.PartnerPortalModule.info;
    return infoState.status;
};