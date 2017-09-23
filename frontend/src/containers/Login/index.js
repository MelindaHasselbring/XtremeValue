npimport React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connectRouter } from '../../utils/connect'
import LoginComponent from './components/LoginComponent'

class Login extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
  }

  render () {
    return <LoginComponent {...this.props} />
  }
}

function selector ({ store }) {
  return { }
}

export default connectRouter(selector)(Login)
