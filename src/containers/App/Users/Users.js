import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { FormattedMessage, FormattedNumber } from "react-intl";
import { Grid } from "react-bootstrap";

import "./Users.css";

import TextSearch from "../../../components/TextSearch/TextSearch";
import { changeUserTextSearch } from "../../../actions";

class Users extends Component {

  constructor(props) {
    super(props);
    this.handleTextSearchChange = this.handleTextSearchChange.bind(this);
    this.textSearch = this.props.textSearch || "";
  }

  handleTextSearchChange(value) {
    this.textSearch = value;

    // call the store
    this.props.changeUserTextSearch(this.textSearch);
  }

  render() {
    return (
      <Grid fluid className="Albums">
        <TextSearch
          value={this.textSearch}
          onValueChange={this.handleTextSearchChange}
        />
      </Grid>
    );
  }
}

Users.propTypes = {
  textSearch: PropTypes.string.isRequired,
  changeUserTextSearch: PropTypes.func.isRequired
};

const mapStateToProps = (state, ownProps) => {
  const { users } = state;

  return {
    textSearch: users.userTextSearch
  };
};

export default connect(mapStateToProps, {
  changeUserTextSearch
})(Users);
