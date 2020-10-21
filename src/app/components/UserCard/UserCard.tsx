import * as React from 'react';
import { Component, ReactNode } from 'react';
import { FormattedMessage, InjectedIntlProps, injectIntl } from 'react-intl';
import {
  Button,
  Card,
  CardBody,
  CardText,
  CardTitle,
} from 'reactstrap';

import { User } from '../../models';

import styles from './UserCard.scss';

interface IProps extends InjectedIntlProps {
  user: User;
  onPostsClick: (event: any) => void;
  onTodosClick: (event: any) => void;
}

export class UserCard extends Component<IProps> {
  protected user: User;

  constructor(props: IProps) {
    super(props);
    this.handlePostsClick = this.handlePostsClick.bind(this);
    this.handleTodosClick = this.handleTodosClick.bind(this);
    this.user = this.props.user;
  }

  public render(): ReactNode {
    return (
      <Card className={styles['UserCard']}>
        <CardBody>
          <CardTitle>
            {this.user.name + ' (' + this.user.username + ' )'}
          </CardTitle>
          <CardText>
            <span className={styles['UserLabel']}>
              <FormattedMessage
                id='user-row.address'
                defaultMessage='Address'
              />
            </span>
            <span className={styles.userValue}>
              {this.user.address.street + ' ' + this.user.address.suite + ', ' + this.user.address.city + ' (' + this.user.address.zipcode + ')'}
            </span>
            <span className={styles['UserLabel']}>
              <FormattedMessage
                id='user-row.email'
                defaultMessage='Email'
              />
            </span>
            <span className={styles['UserValue']}>
              {this.user.email}
            </span>
            <span className={styles['UserLabel']}>
              <FormattedMessage
                id='user-row.phone'
                defaultMessage='Phone'
              />
            </span>
            <span className={styles['UserValue']}>
              {this.user.phone}
            </span>
            <span className={styles['UserLabel']}>
              <FormattedMessage
                id='user-row.website'
                defaultMessage='Website'
              />
            </span>
            <span className={styles['UserValue']}>
              {this.user.website}
            </span>
            <span className={styles['UserLabel']}>
              <FormattedMessage
                id='user-row.company'
                defaultMessage='Company'
              />
            </span>
            <span className={styles['UserValue']}>
              {this.user.company.name + ' ' + this.user.company.catchPhrase + this.user.company.bs}
            </span>
          </CardText>
          <Button color='primary' onClick={this.handlePostsClick}>
            <FormattedMessage
              id='user-row.posts'
              defaultMessage='Posts'
            />
          </Button>
          {' '}
          <Button color='primary' onClick={this.handleTodosClick}>
            <FormattedMessage
              id='user-row.todos'
              defaultMessage='Todos'
            />
          </Button>
        </CardBody>
      </Card>
    );
  }

  protected handlePostsClick(event: any): void {
    this.props.onPostsClick(event);
  }

  protected handleTodosClick(event: any): void {
    this.props.onTodosClick(event);
  }
}

export default injectIntl(UserCard);
