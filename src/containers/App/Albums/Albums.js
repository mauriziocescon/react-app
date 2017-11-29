import React, { Component } from "react";
import { connect } from "react-redux";
// import PropTypes from "prop-types";
import { FormattedMessage, FormattedNumber } from "react-intl";
import { Grid, Row, Col, Button } from "react-bootstrap";

import "./Albums.css";

export class Albums extends Component {

  render() {
    return (
      <Grid fluid className="Albums">
        <Row>
          <Col xs={12}>
            <FormattedNumber value={1000}/>
          </Col>
          <Col xs={12}>
            <FormattedMessage
              id="albums.example"
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
                values={{
                  value: "passed message"
                }}
              />
            </Button>
          </Col>
        </Row>
      </Grid>
    );
  }
}

Albums.propTypes = {
};

const mapStateToProps = (state, ownProps) => {
  return {};
};

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(Albums);
