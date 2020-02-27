import configureStoreDev from './configure-store.dev';
import configureStoreProd from './configure-store.prod';

import { history as historyDev } from './configure-store.dev';
import { history as historyProd } from './configure-store.prod';

import { environment } from '../../environments/environment';

const configureStore = environment.production ? configureStoreProd : configureStoreDev;
const history = environment.production ? historyProd : historyDev;

export default configureStore;

export { history };
