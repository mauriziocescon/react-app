import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { defaultLanguage, availableLanguages } from "../../i18n/configureLocale";
import "./App.css";

import NavigationBar from "../../components/NavigationBar/NavigationBar";
import { changeLanguage } from "../../actions";

class App extends Component {
  constructor(props) {
    super(props);
    this.handleLanguageChange = this.handleLanguageChange.bind(this);
    this.selectedLanguage = this.props.selectedLanguage || defaultLanguage;
    this.availableLanguages = availableLanguages;
  }

  handleLanguageChange(eventKey, event) {
    // call the store
    this.props.changeLanguage(eventKey);
  }

  render() {
    return (
      <div className="App">
        <NavigationBar
          selectedLanguage={this.selectedLanguage}
          availableLanguages={this.availableLanguages}
          onLanguageChange={this.handleLanguageChange}/>
        <div className="App-main-content">
          {this.props.children}
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
  selectedLanguage: PropTypes.string.isRequired,
  changeLanguage: PropTypes.func.isRequired
};

const mapStateToProps = (state, ownProps) => {
  return {
    selectedLanguage: state.intl.locale
  };
};

export default connect(mapStateToProps, {
  changeLanguage
})(App);
