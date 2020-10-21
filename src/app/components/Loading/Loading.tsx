import * as React from 'react';
import { Component, ReactNode } from 'react';
import { FormattedMessage } from 'react-intl';
import {
  Col,
  Row,
} from 'reactstrap';

import styles from './Loading.scss';

export class Loading extends Component {

  public render(): ReactNode {
    return (
      <Row>
        <Col size={12}>
          <h3 className={styles['LoadingMessage']}>
            <FormattedMessage
              id='loading.message'
              defaultMessage='Loading'
            />
          </h3>
        </Col>
      </Row>
    );
  }
}
