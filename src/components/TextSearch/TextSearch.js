import React, { Component } from "react";
import PropTypes from "prop-types";
import { injectIntl, intlShape } from "react-intl";
import { Row, Col, FormGroup, FormControl, InputGroup } from "react-bootstrap";
import FontAwesome from "react-fontawesome";

import "./TextSearch.css";

export class TextSearch extends Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.value = this.props.value;
    this.searchPlaceholder = this.props.intl.formatMessage({id: "text-search.text-placeholder", defaultMessage: "Insert text"});
  }

  handleChange(event) {
    this.value = event.target.value;
    this.props.onValueChange(this.value);
  }

  handleClick(event) {
    if (this.value) {
      this.value = "";
      this.props.onValueChange(this.value);
    }
  }

  render() {
    return (
      <Row>
        <Col xs={12}>
          <FormGroup>
            <InputGroup>
              <FormControl
                type="search"
                value={this.value}
                onChange={this.handleChange}
                placeholder={this.searchPlaceholder}
              />
              <InputGroup.Addon onClick={this.handleClick}>
                <FontAwesome className="Addon" name={this.value ? "remove" : "search"}/>
              </InputGroup.Addon>
            </InputGroup>
          </FormGroup>
        </Col>
      </Row>
    );
  }
}

TextSearch.propTypes = {
  value: PropTypes.string.isRequired,
  onValueChange: PropTypes.func.isRequired,
  intl: intlShape.isRequired
};

export default injectIntl(TextSearch);
