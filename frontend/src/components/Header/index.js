import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Menu, Container, Button } from 'semantic-ui-react'
import { withRouter } from 'react-router'
import { observer } from 'mobx-react'

class Header extends Component {
  static propTypes = {
    title: PropTypes.string,
    logout: PropTypes.func,
    isAdmin: PropTypes.bool,
    isLoggedIn: PropTypes.bool,
    location: PropTypes.object,
    history: PropTypes.object
  }

  static defaultProps = {
    isAdmin: false
  }

  navigateTo = to => {
    const { history } = this.props
    history.replace(`${to}`)
  }

  checkActive = path => {
    const { location } = this.props
    return location.pathname === path
  }

  render () {
    return (
      <Menu fixed='top' size='large'>
        <Container>
          <Menu.Item as='a' active onClick={() => this.navigateTo('/') }>Home</Menu.Item>
          <Menu.Item as='a'>Work</Menu.Item>
          <Menu.Item as='a'>Company</Menu.Item>
          <Menu.Item as='a'>Careers</Menu.Item>
          <Menu.Menu position='right'>
            <Menu.Item className='item'>
              <Button as='a' onClick={() => this.navigateTo('/auth') }>Log in</Button>
            </Menu.Item>
            <Menu.Item>
              <Button as='a' primary>Sign Up</Button>
            </Menu.Item>
          </Menu.Menu>
        </Container>
      </Menu>
    )
  }
}

export default withRouter(observer(Header))
