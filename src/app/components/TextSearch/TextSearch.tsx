import * as React from 'react';
import { Component, ReactNode } from 'react';
import * as FontAwesome from 'react-fontawesome';
import { InjectedIntlProps, injectIntl } from 'react-intl';
import {
  Button,
  Col,
  FormGroup,
  Input,
  InputGroup,
  InputGroupAddon,
  Row,
} from 'reactstrap';

import styles from './TextSearch.scss';

interface IProps extends InjectedIntlProps {
  value: string;
  onValueChange: (value: string) => void;
}

export class TextSearch extends Component<IProps> {
  protected value: string;

  constructor(props: IProps) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.value = this.props.value;
  }

  public render(): ReactNode {
    const searchPlaceholder = this.props.intl.formatMessage({
      defaultMessage: 'Insert text',
      id: 'text-search.text-placeholder',
    });

    return (
      <Row>
        <Col size={12}>
          <FormGroup>
            <InputGroup>
              <Input
                type='search'
                value={this.value}
                onChange={this.handleChange}
                placeholder={searchPlaceholder}
              />
              <InputGroupAddon addonType='append'>
                <Button color='primary' onClick={this.handleClick}>
                  <FontAwesome className='Addon' name={this.value ? 'times' : 'search'}/>
                </Button>
              </InputGroupAddon>
            </InputGroup>
          </FormGroup>
        </Col>
      </Row>
    );
  }

  protected handleChange(event: any) {
    this.value = event.target.value;
    this.props.onValueChange(this.value);
  }

  protected handleClick(event: any) {
    if (this.value) {
      this.value = '';
      this.props.onValueChange(this.value);
    }
  }
}

export default injectIntl(TextSearch);
