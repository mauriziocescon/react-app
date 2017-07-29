import React, { Component } from "react";
import PropTypes from "prop-types";
import "./App.css";

import NavigationBar from "../../components/NavigationBar";

class App extends Component {
  constructor(props) {
    super(props);

    // todo: move values in some constants
    this.selectedLanguage = "en";
    this.availableLanguages = ["en", "it"];
  }

  handleLanguageChange(eventKey, event) {
    // todo call the store
    // this.setState({});

    console.log(eventKey, event);

    // creates a FormattedMessage
    // this.dropdownTitle = <FormattedMessage id={this.props.selectedLanguage} defaultMessage="Languages"/>;
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
  children: PropTypes.object.isRequired
};

export default App;
