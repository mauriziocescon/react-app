import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";
import { Grid } from "react-bootstrap";

import "./Users.css";

import Loading from "../../../components/Loading/Loading";
import TextSearch from "../../../components/TextSearch/TextSearch";
import UserRow from "../../../components/UserRow/UserRow";
import { requestUsers } from "../../../actions";

class Users extends Component {

  constructor(props) {
    super(props);
    this.handleTextSearchChange = this.handleTextSearchChange.bind(this);
    this.handleRowClick = this.handleRowClick.bind(this);
    this.textSearch = this.props.textSearch || "";

    // call the store
    this.props.requestUsers(this.textSearch);
  }

  handleTextSearchChange(value) {
    this.textSearch = value;

    // call the store
    this.props.requestUsers(this.textSearch);
  }

  handleRowClick(event) {
    console.log("Clicked!");

    // todo: call the store
  }

  render() {
    const users = this.props.users || [];
    let content;
    if (this.props.busy) {
      content = <Loading />;
    }
    else {
      content = users.map((user) => {
        return (
          <UserRow key={user.id} user={user} onRowClick={this.handleRowClick}/>
        );
      });
    }

    return (
      <Grid fluid className="Albums">
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
  busy: PropTypes.bool.isRequired,
  users: PropTypes.array,
  requestUsers: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => {
  const { users } = state;

  return {
    textSearch: users.userTextSearch,
    busy: users.busy,
    users: users.users
  };
};

export default connect(mapStateToProps, {
  requestUsers
})(Users);
