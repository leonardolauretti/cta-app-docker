import { all } from 'redux-saga/effects';

import { PartnerPortalModule } from 'src/modules/partner-portal/module';
import { RankingPortalModule } from 'src/modules/ranking-portal/module';

export function* appSaga() {
    yield all([
        PartnerPortalModule.saga(),
        RankingPortalModule.saga(),
    ]);
};
