import React, { Component } from 'react'
import { matchPath } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Header, Footer } from '../../components'
import { connectRouter } from '../../utils/connect'

import { appRouting } from '../../routing'
import './App.scss'

class App extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    // react-router `withRouter` props
    location: PropTypes.object,
    history: PropTypes.object,
    // isLoggedIn can force component to re-render
    isAdmin: PropTypes.bool,
    isLoggedIn: PropTypes.bool,
    logout: PropTypes.func,
    checkAuthLogic: PropTypes.func,
    // isMobile can force component to re-render
    isMobile: PropTypes.bool
  }

  componentWillMount () {
    const { isLoggedIn } = this.props
    this.checkAppAuthLogic(isLoggedIn)
  }

  /**
   * Check that user is allowed to visit route
   * @param  {Bool} loggedIn state.auth.loggedIn, current prop
   * @return {Null} Nothing
   */
  checkAppAuthLogic (loggedIn) {
    const { location, checkAuthLogic, history } = this.props
    const path = location.pathname
    checkAuthLogic(path, loggedIn, history)
  }

  componentWillReceiveProps (nextProps) {
    this.checkAppAuthLogic(nextProps.isLoggedIn)
  }

  /**
  * returns title for header
  * @param  {String} pathname - location.pathname
  * @return {String} page title
  */
  getPageTitle (pathname) {
    const matchedRoutes = appRouting.filter(a => matchPath(pathname, a))
    const currentRoute = matchedRoutes[0] || {}
    const title = currentRoute.name || '404'
    return title
  }

  render () {
    const {
      children,
      isAdmin,
      isLoggedIn,
      logout,
      location,
      isMobile
    } = this.props

    const title = this.getPageTitle(location.pathname)
    const headerProps = {
      title,
      logout,
      isMobile,
      isAdmin,
      isLoggedIn
    }

    return (
      <div className="page-layout">
        <Header {...headerProps} />
        <main>
          <div className="ui basic segment main-content" style={{marginTop: '50px'}}>
            {children}
          </div>
          <Footer />
        </main>
      </div>
    )
  }
}

function selector ({ store }) {
  return {
    isMobile: false,
    isAdmin: false,
    isLoggedIn: false,
    logout: () => {},

    /**
     * Immediately push to homePath('/'), if user is logged.
     * Can be used for other auth logic checks.
     * @param  {String}  path       [current location path]
     * @param  {Boolean} isLoggedIn [is user logged in?]
     */
    checkAuthLogic: (path, isLoggedIn, history) => {
      const authPath = '/auth'
      if (isLoggedIn && path === authPath) {
        return history.push('/dashboard')
      }
    }
  }
}

export default connectRouter(selector)(App)
