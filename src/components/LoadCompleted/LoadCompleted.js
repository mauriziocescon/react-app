import React, { Component } from 'react';
// import PropTypes from "prop-types";
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';
import { Row, Col } from 'react-bootstrap';

import './LoadCompleted.css';

export class LoadCompleted extends Component {

  render() {
    return (
      <Row>
        <Col xs={12}>
          <h3 className="LoadCompletedMessage">
            <FormattedMessage
              id="load-completed.message"
              defaultMessage="Load completed"
            />
          </h3>
        </Col>
      </Row>
    );
  }
}

LoadCompleted.propTypes = {
  intl: intlShape.isRequired,
};

export default injectIntl(LoadCompleted);
