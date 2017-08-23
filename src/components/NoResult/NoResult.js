import React, { Component } from "react";
import PropTypes from "prop-types";
import { injectIntl, intlShape } from "react-intl";
import { Row, Col } from "react-bootstrap";
import { FormattedMessage } from "react-intl";

import "./NoResult.css";

class NoResult extends Component {

  constructor(props) {
    super(props);
  }

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
