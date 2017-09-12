import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { Provider, observer } from 'mobx-react'

import { Router } from 'react-router-dom'

class Root extends Component {
  static propTypes = {
    store: PropTypes.object,
    history: PropTypes.object,
    routes: PropTypes.func
  }

  /**
   * Checks Auth logic. Is user allowed to visit certain path?
   * @param  {String} path next path to visit
   * @return {Bool} is user allowed to visit next location?
   * check RouteAuth component.
   */
  authCheck = path => {
    const {store} = this.props
    const {isLoggedIn} = store.user
    const authPath = '/auth'
    const allowedToVisitPath = [authPath]
    if (isLoggedIn && path === authPath) {
      return false
    } else if (!isLoggedIn && !allowedToVisitPath.includes(path)) {
      return false
    }
    return true
  }

  render () {
    const {store, history, routes} = this.props
    const routesWithAuthProtection = routes(this.authCheck)
    return (
      <Provider key={Math.random()} store={store}>
        <Router key={Math.random()} history={history}>
          {routesWithAuthProtection}
        </Router>
      </Provider>
    )
  }
}

export default observer(Root)
