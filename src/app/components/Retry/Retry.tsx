import * as React from 'react';
import { Component, ReactNode } from 'react';
import { FormattedMessage } from 'react-intl';
import {
  Col,
  Row,
} from 'reactstrap';

import * as styles from './Retry.scss';

interface IProps {
  onRetryClick: (event: any) => void;
}

export class Retry extends Component<IProps> {

  constructor(props: IProps) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  public render(): ReactNode {
    return (
      <Row>
        <Col size={12}>
          <h3 className={styles.retryMessage} onClick={this.handleClick}>
            <FormattedMessage
              id='retry.message'
              defaultMessage='Retry'
            />
          </h3>
        </Col>
      </Row>
    );
  }

  protected handleClick(event: any): void {
    this.props.onRetryClick(event);
  }
}
