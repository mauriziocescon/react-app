import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router";
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from "react-bootstrap";
import { FormattedMessage } from "react-intl";
import "./NavigationBar.css";

class NavigationBar extends Component {

  constructor(props) {
    super(props);
    this.handleSelect = this.handleSelect.bind(this);
    this.dropdownTitle = this.props.selectedLanguage;
    this.languages = this.props.availableLanguages;

    this.createLanguagesItems();
  }

  createLanguagesItems() {
    this.languagesItems = this.languages.map((language) => {
      return (
        <MenuItem key={language} eventKey={language}>{language}</MenuItem>
      )
    });
  }

  handleSelect(eventKey, event) {
    this.props.onLanguageChange(eventKey, event);
  }

  render() {
    return (
      <Navbar fluid fixedTop default collapseOnSelect>
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
            <NavItem eventKey={1} href="#">
              <Link to="albums" activeClassName="active" className="NavigatorBarLink">
                <FormattedMessage
                  id="navigationbar.albums"
                  defaultMessage="Albums"
                />
              </Link>
            </NavItem>
            <NavItem eventKey={2} href="#">
              <Link to="users" activeClassName="active" className="NavigatorBarLink">
                <FormattedMessage
                  id="navigationbar.users"
                  defaultMessage="Users"
                />
              </Link>
            </NavItem>
          </Nav>
          <Nav pullRight>
            <NavDropdown eventKey={3} title={this.dropdownTitle} onSelect={this.handleSelect} id="basic-nav-dropdown">
              {this.languagesItems}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

NavigationBar.propTypes = {
  selectedLanguage: PropTypes.string.isRequired,
  availableLanguages: PropTypes.array.isRequired,
  onLanguageChange: PropTypes.func.isRequired
};

export default NavigationBar;
