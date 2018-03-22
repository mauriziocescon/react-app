import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import Root from './containers/Root';
import configureStore from './store/configureStore';
import configureLocale from './i18n/configureLocale';

import './index.css';
import './bootstrap/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import 'roboto-fontface/css/roboto/roboto-fontface.css';
import registerServiceWorker from './registerServiceWorker';

const store = configureStore(configureLocale());
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Root store={store} history={history}/>,
  document.getElementById('root'),
);

registerServiceWorker();
