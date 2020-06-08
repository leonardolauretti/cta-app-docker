import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';

import AuthenticateView from './views/Authenticate';
import RecoverPasswordView from './views/RecoverPassword';
import ResetPasswordView from './views/ResetPassword';
import RegisterView from './views/Register';
import OverviewView from './views/Overview';
import RankingView from './views/Ranking';
import AccountView from './views/Account';

import viewEnhancer from './components/viewEnhancer';

import MinimalLayout from './layouts/Minimal';
import MainLayout from './layouts/Main';

import rootReducer from './ducks/root/reducer';
import authReducer from './ducks/auth/reducer';
import websocketReducer from './ducks/websocket/reducer';
import inboxReducer from './ducks/inbox/reducer';
import notificationReducer from './ducks/notification/reducer';
import chatReducer from './ducks/chat/reducer';
import accountReducer from './ducks/account/reducer';
import rankingReducer from './ducks/ranking/reducer';
import infoReducer from './ducks/info/reducer';
import companiesReducer from './ducks/companies/reducer';

import rootSaga from './ducks/root/saga';
import authSaga from './ducks/auth/saga';
import websocketSaga from './ducks/websocket/saga';
import inboxSaga from './ducks/inbox/saga';
import chatSaga from './ducks/chat/saga';
import accountSaga from './ducks/account/saga';
import rankingSaga from './ducks/ranking/saga';
import infoSaga from './ducks/info/saga';
import companiesSaga from './ducks/companies/saga';

export enum Paths {
    ROOT = '/PartnerPortal',
    OVERVIEW = '/PartnerPortal/Overview',
    RECOVER_PASSWORD = '/PartnerPortal/RecoverPassword',
    RESET_PASSWORD = '/PartnerPortal/ResetPassword',
    SIGN_IN = '/PartnerPortal/SignIn',
    SIGN_UP = '/PartnerPortal/SignUp',
    RANKING = '/PartnerPortal/Ranking',
    MESSENGER = '/PartnerPortal/Messenger',
    SETTINGS = '/PartnerPortal/Settings',
    ACCOUNT = '/PartnerPortal/Account',
    ACCOUNT_COMPANIES = '/PartnerPortal/Account/Companies',
};

const anonymousOnly = {
    redirectTo: Paths.OVERVIEW,
    anonymous: true,
}

const authenticatedOnly = {
    redirectTo: Paths.SIGN_IN,
    anonymous: false,
}

export class PartnerPortalModule {

    static namespace = 'PartnerPortalModule';

    static routes = [
        { path: '/', exact: true, redirectTo: Paths.ROOT },

        { path: Paths.SIGN_IN, exact: true, component: viewEnhancer(AuthenticateView, MinimalLayout, anonymousOnly) },
        { path: Paths.SIGN_UP, exact: true, component: viewEnhancer(RegisterView, MinimalLayout, anonymousOnly) },
        { path: Paths.RECOVER_PASSWORD, exact: true, component: viewEnhancer(RecoverPasswordView, MinimalLayout, anonymousOnly) },
        { path: Paths.RESET_PASSWORD, exact: true, component: viewEnhancer(ResetPasswordView, MinimalLayout, anonymousOnly) },

        { path: Paths.ROOT, exact: true, redirectTo: Paths.OVERVIEW },
        { path: Paths.OVERVIEW, exact: true, component: viewEnhancer(OverviewView, MainLayout, authenticatedOnly) },
        { path: Paths.RANKING, exact: true, component: viewEnhancer(RankingView, MainLayout, authenticatedOnly) },
        { path: Paths.ACCOUNT, component: viewEnhancer(AccountView, MainLayout, authenticatedOnly) },

        /*{ path: '/partner-portal/forget-password', component: viewEnhancer(ForgetPasswordView, MinimalLayout, anonymousOnly) },
        { path: '/partner-portal/sign-in', component: viewEnhancer(SignInView, MinimalLayout, anonymousOnly) },
        { path: '/partner-portal/sign-up', component: viewEnhancer(SignUpView, MinimalLayout, anonymousOnly) },
        { path: '/partner-portal/reset-password', component: viewEnhancer(ResetPasswordView, MinimalLayout, anonymousOnly) },
        { path: '/partner-portal/register-company', component: viewEnhancer(RegisterCompanyView, MinimalLayout, authenticatedOnly) },

        { path: '/partner-portal/ranking', component: viewEnhancer(RankingView, MainLayout, authenticatedOnly) },
        { path: '/partner-portal/inbox', component: viewEnhancer(InboxView, MainLayout, authenticatedOnly) },
        { path: '/partner-portal/settings', component: viewEnhancer(SettingsView, MainLayout, authenticatedOnly) },
        { path: '/partner-portal/account', component: viewEnhancer(AccountView, MainLayout, authenticatedOnly) },
        { path: '/partner-portal/partner-sign-up', component: viewEnhancer(PartnerSignUpView, MinimalLayout, anonymousOnly) },*/
    ];

    static reducer = combineReducers({
        root: rootReducer,
        info: infoReducer,
        ranking: rankingReducer,
        account: accountReducer,
        companies: companiesReducer,
    });

    static saga = function* () {
        yield all([
            rootSaga(),
            authSaga(),
            websocketSaga(),
            inboxSaga(),
            chatSaga(),
            accountSaga(),
            rankingSaga(),
            infoSaga(),
            companiesSaga(),
        ]);
    };
}