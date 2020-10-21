import * as React from 'react';
import { Component, ReactNode } from 'react';
import { FormattedMessage } from 'react-intl';
import {
  Col,
  Row,
} from 'reactstrap';

import styles from './NoResult.scss';

export class NoResult extends Component {

  public render(): ReactNode {
    return (
      <Row>
        <Col size={12}>
          <h3 className={styles['NoResultMessage']}>
            <FormattedMessage
              id='no-result.message'
              defaultMessage='Empty'
            />
          </h3>
        </Col>
      </Row>
    );
  }
}
