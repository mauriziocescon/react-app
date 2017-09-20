import React, { Component } from "react";
// import PropTypes from "prop-types";
import { injectIntl, intlShape, FormattedMessage } from "react-intl";
import { Row, Col } from "react-bootstrap";

import "./NoResult.css";

export class NoResult extends Component {

  render() {
    return (
      <Row>
        <Col xs={12}>
          <h3 className="NoResultMessage">
            <FormattedMessage
              id="no-result.message"
              defaultMessage="Empty"
            />
          </h3>
        </Col>
      </Row>
    );
  }
}

NoResult.propTypes = {
  intl: intlShape.isRequired
};

export default injectIntl(NoResult);
