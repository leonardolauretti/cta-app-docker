import { ActionTypes, IState } from './types';
import { groupBy } from 'lodash';

const initialState: IState = {

    rankings: {
        byKey: {},
        allKeys: []
    },

    entries: {
        byId: {},
        allIds: [],
    },

    $loading: {},
};

export default function(state = initialState, action) {
    switch (action.type) {

        case ActionTypes.SET_RANKING:
            return setRanking(state, action);

        case ActionTypes.POPULATE_RANKING:
            return populateRanking(state, action);

        default:
            return loadingReducer(state, action);
    }
}

function loadingReducer(state = initialState, action) {
    const { type } = action;
    const matches = /(.*)_(REQUEST|SUCCESS|FAILURE)/.exec(type);

    // not a *_REQUEST / *_SUCCESS /  *_FAILURE actions, so we ignore them
    if (!matches) return state;

    const [, requestName, requestState] = matches;
    return {
        ...state,
        // Store whether a request is happening at the moment or not
        // e.g. will be true when receiving GET_TODOS_REQUEST
        //      and false when receiving GET_TODOS_SUCCESS / GET_TODOS_FAILURE
        $loading: {
            ...state.$loading,
            [requestName]: requestState === 'REQUEST',
        },
    };
}

function setRanking(state: IState, action) {
    return {
        ...state,
        entries: action.payload.entries,
        ranking: {
            created: action.payload.created,
        },
    };
}

function populateRanking(state: IState, action) {

    const ranking = action.payload;
    const allEntries = ranking.entries;
    const rankingCreated = ranking.created;

    const rankingsByKey = {};
    const allRankingsKeys = [];

    const entriesById = {};
    const allEntriesIds = [];

    const entriesByRankingKey = groupBy(ranking.entries, 'ranking');
    const rankingKeys = Object.keys(entriesByRankingKey);

    rankingKeys.map(key => {
        let entries = entriesByRankingKey[key];

        // Sort DESC by entry performance
        entries = entries.sort((entry_a, entry_b) => {
            return entry_b.performance - entry_a.performance;
        });

        // Add position property starting in #1
        entries = entries.map((entry, index) => {
            return {
                ...entry,
                position: index + 1,
            }
        });

        entries.map(entry => {
            const { id } = entry;

            entriesById[id] = entry;

            if (!allEntriesIds.includes(id)) {
                allEntriesIds.push(id);
            }
        });

        rankingsByKey[key] = {
            key,
            entries: entries.map(entry => entry.id),
            created: rankingCreated,
        };

        if (!allRankingsKeys.includes(key)) {
            allRankingsKeys.push(key);
        }
    });

    console.log('rankingsByKey', rankingsByKey);
    console.log('allRankingsKeys', allRankingsKeys);
    console.log('entriesById', entriesById);
    console.log('allEntriesIds', allEntriesIds);

    return {
        ...state,
        rankings: {
            byKey: rankingsByKey,
            allKeys: allRankingsKeys,
        },
        entries: {
            byId: entriesById,
            allIds: allEntriesIds,
        }
    };
}