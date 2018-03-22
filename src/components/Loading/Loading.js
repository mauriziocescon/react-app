import React, { Component } from 'react';
// import PropTypes from "prop-types";
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';
import { Row, Col } from 'react-bootstrap';

import './Loading.css';

export class Loading extends Component {

  render() {
    return (
      <Row>
        <Col xs={12}>
          <h3 className="LoadingMessage">
            <FormattedMessage
              id="loading.message"
              defaultMessage="Loading"
            />
          </h3>
        </Col>
      </Row>
    );
  }
}

Loading.propTypes = {
  intl: intlShape.isRequired,
};

export default injectIntl(Loading);
