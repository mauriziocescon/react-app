import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { FormattedMessage, FormattedNumber } from "react-intl";
import { Grid, Row, Col, Button } from "react-bootstrap";

import "./Users.css";

import TextSearch from "../../../components/TextSearch/TextSearch";
import { changeUserTextSearch } from "../../../actions";

class Users extends Component {

  constructor(props) {
    super(props);
    this.handleTextSearchChange = this.handleTextSearchChange.bind(this);
    this.textSearch = this.props.textSearch || "";
  }

  handleTextSearchChange(textSearch) {
    // call the store
    this.props.changeUserTextSearch(textSearch);
  }

  render() {
    return (
      <Grid fluid className="Albums">
        <TextSearch
          textSearch={this.textSearch}
          onTextSearchChange={this.handleTextSearchChange}
        />



        <Row>
          <Col xs={12}>
            <FormattedNumber value={1000}/>
          </Col>
          <Col xs={12}>
            <FormattedMessage
              id="users.example"
              defaultMessage="default message"
            />
          </Col>
          <Col xs={12}>
            <FormattedMessage
              id="users.example2"
              defaultMessage="default message"
              values={{
                value: "passed message"
              }}
            />
          </Col>
          <Col xs={12}>
            <Button bsStyle="primary">
              <FormattedMessage
                id="albums.example"
                defaultMessage="default message"
              />
            </Button>
          </Col>
        </Row>
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
