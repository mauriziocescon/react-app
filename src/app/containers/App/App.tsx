import * as React from 'react';
import { Component, ReactNode } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import * as styles from './App.scss';

import { changeLanguage } from '../../actions';

import { NavigationBar } from '../../components';

import {
  availableLanguages,
  defaultLanguage,
} from '../../i18n/configure-locale';

import Albums from './Albums/Albums';
import Users from './Users/Users';

class App extends Component<any, any> {

  constructor(props: any) {
    super(props);
    this.handleLanguageChange = this.handleLanguageChange.bind(this);
  }

  public render(): ReactNode {
    const selectedLanguage = this.props.selectedLanguage || defaultLanguage;

    return (
      <BrowserRouter>
        <div className={styles.app}>
          <NavigationBar
            selectedLanguage={selectedLanguage}
            availableLanguages={availableLanguages}
            onLanguageChange={this.handleLanguageChange}
          />
          <div className={styles.appMainContent}>
            <Switch>
              <Route path='/albums' component={Albums}/>
              <Route path='/users' component={Users}/>
              <Route path='*' render={() => (<Redirect to='/users'/>)}/>
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }

  protected handleLanguageChange(language: string) {
    // call the store
    this.props.changeLanguage(language);
  }
}

const mapStateToProps = (state: any, ownProps: any) => {
  return {
    selectedLanguage: state.intl.locale,
  };
};

const mapDispatchToProps = {
  changeLanguage,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
