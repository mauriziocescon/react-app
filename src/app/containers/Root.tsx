import { Component, ReactNode } from 'react';
import { IntlProvider } from 'react-intl-redux';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';

import createHistory from 'history/createBrowserHistory';

import App from './App/App';

export class Root extends Component<any, any> {

  constructor(props: any) {
    super(props);
  }

  public render(): ReactNode {
    const history = createHistory();

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
