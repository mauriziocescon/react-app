import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import "./App.css";

import NavigationBar from "../../components/NavigationBar";
import { changeLanguage } from "../../actions";

class App extends Component {
  constructor(props) {
    super(props);
    this.handleLanguageChange = this.handleLanguageChange.bind(this);

    // todo: move values in some constants
    this.selectedLanguage = "en";
    this.availableLanguages = ["en", "it"];
  }

  handleLanguageChange(eventKey, event) {
    console.log(eventKey, event);

    // creates a FormattedMessage
    // this.dropdownTitle = <FormattedMessage id={this.props.selectedLanguage} defaultMessage="Languages"/>;

    // call the store
    if (this.props.changeLanguage) {
      console.log("Funziona!");
      this.props.changeLanguage(eventKey);
    }
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
  changeLanguage: PropTypes.func.isRequired
};

const mapStateToProps = (state, ownProps) => ({

});

export default connect(mapStateToProps, {
  changeLanguage
})(App);
