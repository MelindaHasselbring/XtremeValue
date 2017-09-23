import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom'
import { observer } from 'mobx-react'

/**
 * Component that protects route from unauthorized users.
 */
class RouteAuth extends Component {
  static propTypes = {
    canAccess: PropTypes.func,
    component: PropTypes.func,
    path: PropTypes.string,
    exact: PropTypes.bool,
    strict: PropTypes.bool
  }

  render () {
    const { canAccess, component, path, exact, strict } = this.props
    const routeProps = {
      path,
      component,
      exact,
      strict
    }

    return canAccess(path) ? <Route {...routeProps} /> : <Redirect push to="/auth" />
  }
}

export default observer(RouteAuth)
