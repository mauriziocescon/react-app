import React, { Component } from "react";
import PropTypes from "prop-types";
import { injectIntl, intlShape } from "react-intl";
import { Row, Col } from "react-bootstrap";
import { FormattedMessage } from "react-intl";

import "./Loading.css";

class Loading extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Row>
        <Col xs={12}>
          <FormattedMessage
            id="navigationbar.albums"
            defaultMessage="Albums"
          />
        </Col>
      </Row>
    );
  }
}

Loading.propTypes = {
  value: PropTypes.string.isRequired,
  onValueChange: PropTypes.func.isRequired,
  intl: intlShape.isRequired
};

export default injectIntl(Loading);
