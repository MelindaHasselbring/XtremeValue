import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Menu, Container, Button, Input } from 'semantic-ui-react';
import { withRouter } from 'react-router';
import { observer } from 'mobx-react';
import './header.css';
import image from './images/x_480.png';

class Header extends Component {
  static propTypes = {
    title: PropTypes.string,
    logout: PropTypes.func,
    isAdmin: PropTypes.bool,
    isLoggedIn: PropTypes.bool,
    location: PropTypes.object,
    history: PropTypes.object
  };

  static defaultProps = {
    isAdmin: false
  };

  navigateTo = to => {
    const { history } = this.props;
    history.replace(`${to}`);
  };

  checkActive = path => {
    const { location } = this.props;
    return location.pathname === path;
  };

  render() {
    return (
      <Menu fixed="top" size="large">
        <Container>
          <button id="logo">
            <img
              src={image}
              alt="xvlogo"
              class="w3-circle"
               
            />
          </button>
          <Menu.Item as="a">Submit a Coupon</Menu.Item>
          <Menu.Item as="a">My Wallet</Menu.Item>
          <Menu.Item as="a">Best Rated Coupons</Menu.Item>
          <Menu.Menu position="right">
            <Menu.Item>
              <Input icon='search' placeholder='Search...' />
            </Menu.Item>
            <Menu.Item>
              <Button primary as="a" onClick={() => this.navigateTo('/auth')}>
                Log In/Sign Up
              </Button>
            </Menu.Item>
          </Menu.Menu>
        </Container>
      </Menu>
    );
  }
}

export default withRouter(observer(Header));
