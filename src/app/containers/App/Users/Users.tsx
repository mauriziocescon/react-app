import { Component, ReactNode } from 'react';
import { InjectedIntlProps, injectIntl } from 'react-intl';
import { connect } from 'react-redux';
import { Col, Container, Row } from 'reactstrap';

import { requestUsers } from '../../../actions';

import {
  LoadCompleted,
  Loading,
  NoResult,
  Retry,
  TextSearch,
  UserCard,
} from '../../../components';

import { User } from '../../../models';

interface IProps extends InjectedIntlProps {
  textSearch: string;
  isFetching: boolean;
  users: User[];
  usersFailureError: string;
  requestUsers: (textSearch: string) => void;
}

class Users extends Component<IProps, any> {
  protected textSearch: string;
  protected isFetching: boolean;
  protected users: User[] | undefined;
  protected usersFailureError: string | undefined;

  constructor(props: IProps) {
    super(props);
    this.handleTextSearchChange = this.handleTextSearchChange.bind(this);
    this.handlePostsClick = this.handlePostsClick.bind(this);
    this.handleTodosClick = this.handleTodosClick.bind(this);
    this.handleRetryClick = this.handleRetryClick.bind(this);
    this.textSearch = this.props.textSearch || '';
    this.isFetching = false;

    if (!this.props.usersFailureError && !this.props.users) {
      // call the store
      this.props.requestUsers(this.textSearch);
    }
  }

  public render(): ReactNode {
    const users = this.props.users;
    let userCards;
    let message;

    if (this.props.isFetching) {
      message = <Loading/>;
    }
    else if (users) {
      message = users.length ? <LoadCompleted/> : <NoResult/>;
      userCards = users.map((user: User) => {
        return (
          <Col key={user.id} size={12} sm={6}>
            <UserCard
              intl={this.props.intl}
              user={user}
              onPostsClick={this.handlePostsClick}
              onTodosClick={this.handleTodosClick}/>
          </Col>
        );
      });
    }
    else {
      message = <Retry onRetryClick={this.handleRetryClick}/>;
    }

    return (
      <Container fluid>
        <Row>
          <Col size={12}>
            <TextSearch
              value={this.textSearch}
              onValueChange={this.handleTextSearchChange}
              intl={this.props.intl}
            />
          </Col>
        </Row>
        <Row>
          {userCards}
        </Row>
        {message}
      </Container>
    );
  }

  protected handleTextSearchChange(value: string): void {
    this.textSearch = value;

    // call the store
    this.props.requestUsers(this.textSearch);
  }

  protected handlePostsClick(event: any): void {
    alert('Posts clicked!');
    // todo: call the store
  }

  protected handleTodosClick(event: any): void {
    alert('Todos clicked!');
    // todo: call the store
  }

  protected handleRetryClick(event: any): void {
    // call the store
    this.props.requestUsers(this.textSearch);
  }
}

const mapStateToProps = (state: any, ownProps: any) => {
  const { users } = state;

  return {
    isFetching: users.isFetching,
    textSearch: users.userTextSearch,
    users: users.users,
    usersFailureError: users.usersFailureError,
  };
};

const mapDispatchToProps = {
  requestUsers,
};

export default connect(mapStateToProps, mapDispatchToProps)(injectIntl(Users));
