import { appReducer } from './app.reducer';
import { appSaga } from './app.saga';

// Modules
import { PartnerPortalModule } from 'src/modules/partner-portal/module';
import { RankingPortalModule } from 'src/modules/ranking-portal/module';

// Errors
import { Error404View } from './scenes/error404.view';

export const reducer = appReducer;
export const saga = appSaga;

export const routes = [
    // Modules
    ...PartnerPortalModule.routes,
    ...RankingPortalModule.routes,
    // Errors
    { component: Error404View },
];
