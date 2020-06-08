import { combineReducers, Reducer } from 'redux';

import { PartnerPortalModule } from 'src/modules/partner-portal/module';
import { RankingPortalModule } from 'src/modules/ranking-portal/module';

export const appReducer: Reducer = combineReducers({
    [PartnerPortalModule.namespace]: PartnerPortalModule.reducer,
    [RankingPortalModule.namespace]: RankingPortalModule.reducer,
});
