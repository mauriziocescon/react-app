import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { FormattedMessage, FormattedNumber } from "react-intl";
import { Button } from "react-bootstrap";

import "./Users.css";

class Users extends Component {

  render() {
    return (
      <div className="container-fluid Users">
        <div className="row">
          <div className="col-xs-12">
            <div>
              <div>
                <FormattedNumber value={1000}/>
              </div>
              <div>
                <FormattedMessage
                  id="users.example"
                  defaultMessage="default message"
                />
              </div>
              <div>
                <FormattedMessage
                  id="users.example2"
                  defaultMessage="default message"
                  values={{
                    value: "message to pass"
                  }}
                />
              </div>
              <div>
                <Button bsStyle="primary">
                  <FormattedMessage
                    id="users.example"
                    defaultMessage="default message"
                  />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Users.propTypes = {
};

const mapStateToProps = (state, ownProps) => {
  return {};
};

export default connect(mapStateToProps

)(Users);
