import { Component, ReactNode } from 'react';
import { FormattedMessage, FormattedNumber } from 'react-intl';
import { connect } from 'react-redux';
import { Button, Col, Container, Row } from 'reactstrap';

class Albums extends Component<any, any> {

  constructor(props: any) {
    super(props);
  }

  public render(): ReactNode {
    return (
      <Container fluid>
        <Row>
          <Col size={12}>
            <FormattedNumber value={1000.78}/>
          </Col>
        </Row>
        <Row>
          <Col size={12}>
            <FormattedMessage
              id='albums.example'
              defaultMessage='default message'
              values={{
                value: 'passed message',
              }}
            />
          </Col>
        </Row>
        <Row>
          <Col size={12}>
            <Button color='primary'>
              <FormattedMessage
                id='albums.example'
                defaultMessage='default message'
                values={{
                  value: 'passed message',
                }}
              />
            </Button>
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = (state: any, ownProps: any) => {
  return {};
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Albums);
