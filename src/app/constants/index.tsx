import * as constantsDev from './constants.dev';
import * as constantsProd from './constants.prod';

import { environment } from '../../environments/environment';

const constants = environment.production ? constantsProd : constantsDev;
export default constants;
