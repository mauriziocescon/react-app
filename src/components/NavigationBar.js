import React, { Component } from "react";
import { Link, IndexLink } from "react-router";
import "./NavigationBar.css";

class NavigationBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-default navbar-fixed-top">
        <ul className="nav navbar-nav navbar-left">
          <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
          <li><Link to="users" activeClassName="active">Users</Link></li>
        </ul>
      </nav>
    );
  }
}

export default NavigationBar;
