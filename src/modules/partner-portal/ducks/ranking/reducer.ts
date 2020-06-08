import { ActionTypes, IState } from './types';

const initialState: IState = {

    ranking: {
        entries: [],
        created: '',
    },

    entries: {
        byId: {},
        allIds: [],
    },
};

export default function(state = initialState, action) {
    switch (action.type) {

        case ActionTypes.SET_RANKING_ENTRIES:
            return setRankingEntries(state, action);

        case ActionTypes.POPULATE_RANKING:
            return populateRanking(state, action);

        default:
            return { ...state };
    }
}

function setRankingEntries(state, action) {
    return {
        ...state,
        ranking: {
            ...state.ranking,
            entries: action.payload,
        },
    };
}

function populateRanking(state: IState, action) {
    const ranking = action.payload;
    const allEntries = ranking.entries;
    const rankingCreated = ranking.created;

    const entriesById = {};
    const allEntriesIds = [];

    allEntries.map((entry) => {
        const { id } = entry;

        entriesById[id] = entry;

        if (!allEntriesIds.includes(id)) {
            allEntriesIds.push(id);
        }
    });

    return {
        ...state,
        ranking: {
            entries: allEntriesIds,
            created: rankingCreated,
        },
        entries: {
            byId: entriesById,
            allIds: allEntriesIds,
        },
    };
}