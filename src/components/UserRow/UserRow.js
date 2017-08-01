import React, { Component } from "react";
import PropTypes from "prop-types";
import { injectIntl, intlShape } from "react-intl";
import { Row, Col } from "react-bootstrap";
import FontAwesome from "react-fontawesome";

import "./UserRow.css";

class UserRow extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Row>
        <Col xs={12}>

        </Col>
      </Row>
    );
  }
}

UserRow.propTypes = {
  intl: intlShape.isRequired
};

export default injectIntl(UserRow);
