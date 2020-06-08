import { configureStore } from './configure';
import { reducer, saga } from 'src/modules/app/app.module';

const store = configureStore(reducer, saga);

export default store;