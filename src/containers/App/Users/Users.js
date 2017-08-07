import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { FormattedMessage, FormattedNumber } from "react-intl";
import { Grid } from "react-bootstrap";

import "./Users.css";

import TextSearch from "../../../components/TextSearch/TextSearch";
import UserRow from "../../../components/UserRow/UserRow";
import { requestUsers } from "../../../actions";

class Users extends Component {

  constructor(props) {
    super(props);
    this.handleTextSearchChange = this.handleTextSearchChange.bind(this);
    this.handleRowClick = this.handleRowClick.bind(this);
    this.textSearch = this.props.textSearch || "";

    this.users = [{id: "1"}, {id: "2"}, {id: "3"}, {id: "4"}];
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
    const userRows = this.users.map((user) => {
      return (
        <UserRow key={user.id} user={user} onRowClick={this.handleRowClick}/>
      );
    });

    return (
      <Grid fluid className="Albums">
        <TextSearch
          value={this.textSearch}
          onValueChange={this.handleTextSearchChange}
        />
        {userRows}
      </Grid>
    );
  }
}

Users.propTypes = {
  textSearch: PropTypes.string.isRequired,
  requestUsers: PropTypes.func.isRequired
};

const mapStateToProps = (state, ownProps) => {
  const {users} = state;

  return {
    textSearch: users.userTextSearch
  };
};

export default connect(mapStateToProps, {
  requestUsers
})(Users);
