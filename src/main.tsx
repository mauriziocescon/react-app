import * as React from 'react';
import { Component, ReactNode } from 'react';
import * as ReactDOM from 'react-dom';

import { Root } from './app/containers/Root';
import { configureLocale } from './app/i18n/configure-locale';
import configureStore from './app/store-config/configure-store';

const store = configureStore(configureLocale());

class Main extends Component<any, any> {

  constructor(props: any) {
    super(props);
  }

  public render(): ReactNode {
    return (
      <Root store={store}/>
    );
  }
}

ReactDOM.render(<Main/>, document.getElementById('root'));
