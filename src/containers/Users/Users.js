import React, { Component } from "react";
import { FormattedMessage, FormattedNumber } from "react-intl";

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
                  id="app.welcome"
                  defaultMessage="default message"
                />
              </div>
              <div>
                <FormattedMessage
                  id="app.greeting-message"
                  defaultMessage="default message"
                  values={{
                    name: "Paul"
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Users;
