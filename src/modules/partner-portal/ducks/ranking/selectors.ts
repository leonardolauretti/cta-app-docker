import _ from 'lodash';

export const createLoadingSelector = (actions) => (state) => {
    // returns true only when all actions is not loading
    return _(actions).some((action) => {
        return _.get(state, `PartnerPortalModule.root.$loading.${action}`);
    });
};

export const rankingStateSelector = (state) => {
    const rankingState = state.PartnerPortalModule.ranking;
    return rankingState;
}

export const entriesByIdSelector = (state) => {
    return rankingStateSelector(state).entries.byId;
}

export const allEntriesIdsSelector = (state) => {
    return rankingStateSelector(state).entries.allIds;
}

export const rankingSelector = (state) => {
    return rankingStateSelector(state).ranking;
}