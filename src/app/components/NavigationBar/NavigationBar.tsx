import * as React from 'react';
import { Component, ReactNode } from 'react';
import * as FontAwesome from 'react-fontawesome';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import {
  Button,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  Navbar,
  NavbarBrand,
  NavItem,
  NavLink,
  UncontrolledDropdown,
} from 'reactstrap';

import constants from '../../constants';

import * as styles from './NavigationBar.scss';

interface IProps {
  selectedLanguage: string;
  availableLanguages: string[];
  onLanguageChange: (language: string) => void;
}

export class NavigationBar extends Component<IProps> {

  constructor(props: IProps) {
    super(props);
    this.handleServerClick = this.handleServerClick.bind(this);
    this.handleDropdownItemClick = this.handleDropdownItemClick.bind(this);
  }

  get navBarClasses(): any {
    return `bg-secondary ${styles.navigationBar}`;
  }

  public render(): ReactNode {
    const dropdownTitle = this.props.selectedLanguage;
    const languages = this.props.availableLanguages;

    const serverButton = constants.SHOW_JSON_SERVER_API ?
      <NavItem>
        <Button color='secondary' onClick={this.handleServerClick}>
          <FontAwesome className='Addon' name='server'/>
        </Button>
      </NavItem> : null;

    const languagesItems = languages.map((language: string) => {
      return (
        <DropdownItem key={language} onClick={() => this.handleDropdownItemClick(language)}>{language}</DropdownItem>
      );
    });

    return (
      <Navbar className={this.navBarClasses} expand='md' fixed='top' light>
        <NavbarBrand>
          <span className={styles.navbarBrand}>
             <FormattedMessage
               id='navigation-bar.title'
               defaultMessage='Title'
             />
          </span>
        </NavbarBrand>
        <Nav className='ml-auto' navbar>
          <NavItem>
            <NavLink>
              <Link to='/albums' className={styles.navigatorBarLink}>
                <FormattedMessage
                  id='navigation-bar.albums'
                  defaultMessage='Albums'
                />
              </Link>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink>
              <Link to='/users' className={styles.navigatorBarLink}>
                <FormattedMessage
                  id='navigation-bar.users'
                  defaultMessage='Albums'
                />
              </Link>
            </NavLink>
          </NavItem>
          {serverButton}
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              {dropdownTitle}
            </DropdownToggle>
            <DropdownMenu right>
              {languagesItems}
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
      </Navbar>
    );
  }

  protected handleServerClick(): void {
    window.open(constants.JSON_SERVER_API_URL, '_blank');
  }

  protected handleDropdownItemClick(language: string): void {
    this.props.onLanguageChange(language);
  }
}
