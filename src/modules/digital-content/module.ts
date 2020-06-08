import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import rootSaga from './ducks/root/saga';
import rootReducer from './ducks/root/reducer';
import Layout from './layout/Main';
import { withLayout } from './components/withLayout';
import { viewEnhancer } from './components/viewEnhancer';

import ContentView from './views/Content';
import SignInView from './views/SignIn';

const anonymousOnly = {
    redirectTo: '/ConteudoExclusivo',
    anonymous: true,
}

const authenticatedOnly = {
    redirectTo: '/CodigoDeAcesso',
    anonymous: false,
}

export class DigitalContentModule {

    static namespace = 'DigitalContentModule';

    static routes = [
        { path: '/', exact: true, redirectTo: '/CodigoDeAcesso' },
        { path: '/CodigoDeAcesso', component: viewEnhancer(SignInView, Layout, anonymousOnly) },
        { path: '/ConteudoExclusivo', component: viewEnhancer(ContentView, Layout, authenticatedOnly) },
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