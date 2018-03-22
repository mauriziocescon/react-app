import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';
import { Row, Col, Button } from 'react-bootstrap';

import './UserRow.css';

export class UserRow extends Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.user = this.props.user;
  }

  handleClick(event) {
    this.props.onRowClick(event);
  }

  render() {
    return (
      <Row>
        <Col className="UserRow" xs={12} onClick={this.handleClick}>
          <Row>
            <Col xs={10}>
              <Row>
                <Col xs={12} sm={6}>
                  <div className="UserLabel">
                    <FormattedMessage
                      id="user-row.name"
                      defaultMessage="Name"
                    />
                  </div>
                  <div className="UserValue">
                    {this.user.name + ' (' + this.user.username + ')'}
                  </div>
                </Col>
                <Col xs={12} sm={6}>
                  <div className="UserLabel">
                    <FormattedMessage
                      id="user-row.address"
                      defaultMessage="Address"
                    />
                  </div>
                  <div className="UserValue">
                    {this.user.address.street + ' ' + this.user.address.suite + ', ' + this.user.address.city + ' (' + this.user.address.zipcode + ')'}
                  </div>
                </Col>
                <Col xs={12} sm={6}>
                  <div className="UserLabel">
                    <FormattedMessage
                      id="user-row.email"
                      defaultMessage="Email"
                    />
                  </div>
                  <div className="UserValue">
                    {this.user.email}
                  </div>
                </Col>
                <Col xs={12} sm={6}>
                  <div className="UserLabel">
                    <FormattedMessage
                      id="user-row.phone"
                      defaultMessage="Phone"
                    />
                  </div>
                  <div className="UserValue">
                    {this.user.phone}
                  </div>
                </Col>
                <Col xs={12} sm={6}>
                  <div className="UserLabel">
                    <FormattedMessage
                      id="user-row.website"
                      defaultMessage="Website"
                    />
                  </div>
                  <div className="UserValue">
                    {this.user.website}
                  </div>
                </Col>
                <Col xs={12} sm={6}>
                  <div className="UserLabel">
                    <FormattedMessage
                      id="user-row.company"
                      defaultMessage="Company"
                    />
                  </div>
                  <div className="UserValue">
                    {this.user.company.name + ' ' + this.user.company.catchPhrase + this.user.company.bs}
                  </div>
                </Col>
              </Row>
            </Col>
            <Col xs={2}>
              <Button bsStyle="primary">
                <FormattedMessage
                  id="user-row.todos"
                  defaultMessage="Todos"
                />
              </Button>
              <Button bsStyle="primary">
                <FormattedMessage
                  id="user-row.posts"
                  defaultMessage="Posts"
                />
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}

UserRow.propTypes = {
  user: PropTypes.object.isRequired,
  onRowClick: PropTypes.func.isRequired,
  intl: intlShape.isRequired,
};

export default injectIntl(UserRow);
