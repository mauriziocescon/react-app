import * as React from 'react';
import { Component, ReactNode } from 'react';
import { FormattedMessage } from 'react-intl';
import {
  Col,
  Row,
} from 'reactstrap';

import styles from './LoadCompleted.scss';

export class LoadCompleted extends Component {

  public render(): ReactNode {
    return (
      <Row>
        <Col size={12}>
          <h3 className={styles['LoadCompletedMessage']}>
            <FormattedMessage
              id='load-completed.message'
              defaultMessage='Load completed'
            />
          </h3>
        </Col>
      </Row>
    );
  }
}
