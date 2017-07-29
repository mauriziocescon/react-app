import React, { Component } from "react";
import { Link } from "react-router";
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from "react-bootstrap";
import { FormattedMessage } from "react-intl";
import "./NavigationBar.css";

class NavigationBar extends Component {
  render() {
    return (
      <Navbar fluid fixedTop inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a>
              <FormattedMessage
                id="navigationbar.title"
                defaultMessage="Title"
              />
            </a>
          </Navbar.Brand>
          <Navbar.Toggle/>
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={2} href="#">
              <Link to="albums" activeClassName="active">
                <FormattedMessage
                  id="navigationbar.albums"
                  defaultMessage="Albums"
                />
              </Link>
            </NavItem>
            <NavItem eventKey={3} href="#">
              <Link to="users" activeClassName="active">
                <FormattedMessage
                  id="navigationbar.users"
                  defaultMessage="Users"
                />
              </Link>
            </NavItem>
          </Nav>
          <Nav pullRight>
            <NavDropdown eventKey={4} title="Language" id="basic-nav-dropdown">
              <MenuItem eventKey={4.1}>en</MenuItem>
              <MenuItem eventKey={4.2}>it</MenuItem>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavigationBar;
