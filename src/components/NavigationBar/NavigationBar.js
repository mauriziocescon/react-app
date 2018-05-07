import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

import './NavigationBar.css';

export class NavigationBar extends Component {

  constructor(props) {
    super(props);
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(eventKey, event) {
    this.props.onLanguageChange(eventKey, event);
  }

  render() {
    const dropdownTitle = this.props.selectedLanguage;
    const languages = this.props.availableLanguages;

    const languagesItems = languages.map((language) => {
      return (
        <MenuItem key={language} eventKey={language}>{language}</MenuItem>
      );
    });

    return (
      <Navbar fluid fixedTop default collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a>
              <FormattedMessage
                id="navigation-bar.title"
                defaultMessage="Title"
              />
            </a>
          </Navbar.Brand>
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="#">
              <Link to="albums" activeClassName="active" className="NavigatorBarLink">
                <FormattedMessage
                  id="navigation-bar.albums"
                  defaultMessage="Albums"
                />
              </Link>
            </NavItem>
            <NavItem eventKey={2} href="#">
              <Link to="users" activeClassName="active" className="NavigatorBarLink">
                <FormattedMessage
                  id="navigation-bar.users"
                  defaultMessage="Users"
                />
              </Link>
            </NavItem>
          </Nav>
          <Nav pullRight>
            <NavDropdown id="language-nav-dropdown" eventKey={3} title={dropdownTitle}
                         onSelect={this.handleSelect}>
              {languagesItems}
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
  onLanguageChange: PropTypes.func.isRequired,
};

export default NavigationBar;
