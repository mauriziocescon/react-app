import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Grid } from 'react-bootstrap';

import './Users.css';

import LoadCompleted from '../../../components/LoadCompleted/LoadCompleted';
import Loading from '../../../components/Loading/Loading';
import NoResult from '../../../components/NoResult/NoResult';
import Retry from '../../../components/Retry/Retry';
import TextSearch from '../../../components/TextSearch/TextSearch';
import UserRow from '../../../components/UserRow/UserRow';
import { requestUsers } from '../../../actions';

export class Users extends Component {

  constructor(props) {
    super(props);
    this.handleTextSearchChange = this.handleTextSearchChange.bind(this);
    this.handleRowClick = this.handleRowClick.bind(this);
    this.handleRetryClick = this.handleRetryClick.bind(this);
    this.textSearch = this.props.textSearch || '';

    if (!this.props.usersFailureError && !this.props.users) {
      // call the store
      this.props.requestUsers(this.textSearch);
    }
  }

  handleTextSearchChange(value) {
    this.textSearch = value;

    // call the store
    this.props.requestUsers(this.textSearch);
  }

  handleRowClick(event) {
    alert('Clicked!');

    // todo: call the store
  }

  handleRetryClick(event) {
    // call the store
    this.props.requestUsers(this.textSearch);
  }

  render() {
    const users = this.props.users;
    let content;

    if (this.props.isFetching) {
      content = <Loading/>;
    }
    else if (users) {
      content = users.map((user) => {
        return (
          <UserRow key={user.id} user={user} onRowClick={this.handleRowClick}/>
        );
      });
      if (users.length) {
        content = content.concat(<LoadCompleted key={'###'}/>);
      }
      else {
        content = content.concat(<NoResult key={'###'}/>);
      }
    }
    else {
      content = <Retry onRetryClick={this.handleRetryClick}/>;
    }

    return (
      <Grid fluid className="Users">
        <TextSearch
          value={this.textSearch}
          onValueChange={this.handleTextSearchChange}
        />
        {content}
      </Grid>
    );
  }
}

Users.propTypes = {
  textSearch: PropTypes.string.isRequired,
  isFetching: PropTypes.bool.isRequired,
  users: PropTypes.array,
  usersFailureError: PropTypes.string,
  requestUsers: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => {
  const {users} = state;

  return {
    textSearch: users.userTextSearch,
    isFetching: users.isFetching,
    users: users.users,
    usersFailureError: users.usersFailureError,
  };
};

const mapDispatchToProps = {
  requestUsers,
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
