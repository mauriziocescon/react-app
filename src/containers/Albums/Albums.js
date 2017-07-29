import React, { Component } from "react";
import { FormattedMessage, FormattedNumber } from "react-intl";
import { Button } from "react-bootstrap";

import "./Albums.css";

class Albums extends Component {

  render() {
    return (
      <div className="container-fluid Albums">
        <div className="row">
          <div className="col-xs-12">
            <div>
              <div>
                <FormattedNumber value={1000}/>
              </div>
              <div>
                <Button bsStyle="primary">
                  <FormattedMessage
                    id="albums.example"
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

export default Albums;
