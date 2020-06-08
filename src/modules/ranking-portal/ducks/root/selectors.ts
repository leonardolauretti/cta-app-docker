import _ from 'lodash';

export const createLoadingSelector = (actions) => (state) => {
    return _(actions).some((action) => _.get(state, `RankingPortalModule.root.$loading.${action}`));
};

export const rootSelector = (state) => {
    const rootState = state['RankingPortalModule'].root;
    return rootState;
};

export const rankingSelector = (state) => {
    const rootState = state['RankingPortalModule'].root;
    return rootState.ranking;
};

export const entriesSelector = (state) => {
    const rootState = state['RankingPortalModule'].root;
    return rootState.entries;
};

export const entriesByIdSelector = (state) => {
    const entries = rootSelector(state).entries;
    return entries.byId;
};

export const allEntriesIdsSelector = (state) => {
    const entries = rootSelector(state).entries;
    return entries.allIds;
};

export const rankingsByKeySelector = (state) => {
    const rankings = rootSelector(state).rankings;
    return rankings.byKey;
};

export const allRankingsKeysSelector = (state) => {
    const rankings = rootSelector(state).rankings;
    return rankings.allKeys;
};
