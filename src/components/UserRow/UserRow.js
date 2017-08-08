import React, { Component } from "react";
import PropTypes from "prop-types";
import { injectIntl, intlShape } from "react-intl";
import { Row, Col } from "react-bootstrap";

import "./UserRow.css";

class UserRow extends Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.user = this.props.user;
  }

  handleClick(event) {
    this.props.onRowClick(event);
  }

  render() {
    return (
      <Row>
        <Col className="UserRow" xs={12} onClick={this.handleClick}>
          {JSON.stringify(this.user)}
        </Col>
      </Row>
    );
  }
}

UserRow.propTypes = {
  user: PropTypes.object.isRequired,
  onRowClick: PropTypes.func.isRequired,
  intl: intlShape.isRequired
};

export default injectIntl(UserRow);
