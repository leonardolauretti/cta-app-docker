import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';

import RankingView from './views/Ranking';

import { withLayout } from './components/withLayout';

import MinimalLayout from './layouts/Minimal';
import MainLayout from './layouts/Main';

import rootReducer from './ducks/root/reducer';

import rootSaga from './ducks/root/saga';

export enum Paths {
    ROOT = '/RankingPortal',
};

export class RankingPortalModule {

    static namespace = 'RankingPortalModule';

    static routes = [
        { path: Paths.ROOT, exact: true, component: withLayout(RankingView, MinimalLayout) },
    ];

    static reducer = combineReducers({
        root: rootReducer,
    });

    static saga = function* () {
        yield all([
            rootSaga(),
        ]);
    };
}