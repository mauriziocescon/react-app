import { Component, ReactNode } from 'react';
import { FormattedMessage } from 'react-intl';
import {
  Col,
  Row,
} from 'reactstrap';

import * as styles from './NoResult.scss';

export class NoResult extends Component {

  public render(): ReactNode {
    return (
      <Row>
        <Col size={12}>
          <h3 className={styles.noResultMessage}>
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
