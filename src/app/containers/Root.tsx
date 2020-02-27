import * as React from 'react';
import { Component, ReactNode } from 'react';
import { IntlProvider } from 'react-intl-redux';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';

import { createBrowserHistory } from 'history';

import App from './App/App';

export class Root extends Component<any, any> {

  constructor(props: any) {
    super(props);
  }

  public render(): ReactNode {
    const history = createBrowserHistory();

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
