import React, { Component } from "react";
import PropTypes from "prop-types";
import { injectIntl, intlShape, FormattedMessage } from "react-intl";
import { Row, Col } from "react-bootstrap";

import "./Retry.css";

export class Retry extends Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.props.onRetryClick(event);
  }

  render() {
    return (
      <Row>
        <Col xs={12}>
          <h3 className="RetryMessage" onClick={this.handleClick}>
            <FormattedMessage
              id="retry.message"
              defaultMessage="Retry"
            />
          </h3>
        </Col>
      </Row>
    );
  }
}

Retry.propTypes = {
  onRetryClick: PropTypes.func.isRequired,
  intl: intlShape.isRequired
};

export default injectIntl(Retry);
