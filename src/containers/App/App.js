import React, { Component } from "react";
import PropTypes from "prop-types";
import "./App.css";

import NavigationBar from "../../components/NavigationBar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavigationBar/>
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
