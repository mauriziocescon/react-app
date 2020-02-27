import * as React from 'react';
import { Component, ReactNode } from 'react';
import { IntlProvider } from 'react-intl-redux';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import { history } from '../store-config/configure-store';

import App from './App/App';

export class Root extends Component<any, any> {

  constructor(props: any) {
    super(props);
  }

  public render(): ReactNode {
    return (
      <Provider store={this.props.store}>
        <IntlProvider>
          <ConnectedRouter history={history}>
            <App/>
          </ConnectedRouter>
        </IntlProvider>
      </Provider>
    );
  }
}
