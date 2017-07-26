import React from "react";
// import logo from "./logo.svg";
import "./App.css";

import { Link } from "react-router";


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/users">Users</Link>
        </div>

        {this.props.children}
      </div>
    );
  }
}

export default App;
