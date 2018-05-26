import configureStoreDev from './configure-store.dev';
import configureStoreProd from './configure-store.prod';

import { environment } from '../../environments/environment';

const configureStore = environment.production ? configureStoreProd : configureStoreDev;
export default configureStore;
