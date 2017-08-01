import React, { Component } from "react";
import PropTypes from "prop-types";
import { injectIntl, intlShape } from "react-intl";
import { Row, Col, FormGroup, FormControl, InputGroup } from "react-bootstrap";
import FontAwesome from "react-fontawesome";

import "./TextSearch.css";

class TextSearch extends Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.textSearch = this.props.textSearch;
    this.searchPlaceholder = this.props.intl.formatMessage({id: "users.textPlaceholder", defaultMessage: "Insert text"});
  }

  handleChange(event) {
    this.textSearch = event.target.value;
    this.props.onTextSearchChange(this.textSearch);
  }

  render() {
    return (
      <Row>
        <Col xs={12}>
          <FormGroup>
            <InputGroup>
              <FormControl
                type="search"
                defaultValue={this.textSearch}
                onChange={this.handleChange}
                placeholder={this.searchPlaceholder}
              />
              <InputGroup.Addon>
                <FontAwesome className="Addon" name="search"/>
              </InputGroup.Addon>
            </InputGroup>
          </FormGroup>
        </Col>
      </Row>
    );
  }
}

TextSearch.propTypes = {
  textSearch: PropTypes.string.isRequired,
  onTextSearchChange: PropTypes.func.isRequired,
  intl: intlShape.isRequired
};

export default injectIntl(TextSearch);
