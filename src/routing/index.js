import React from 'react'
import {Route, Redirect, Switch} from 'react-router-dom'
import DevTools from 'mobx-react-devtools'
import createBrowserHistory from 'history/createBrowserHistory'
import { App, Dashboard, Home, Login } from '../containers'
import { RouteAuth } from '../components'
import { isDev } from '../utils/env'
export const history = getHistory()

export const appRouting = [
  {
    path: '/',
    exact: true,
    tag: Route,
    component: Home
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    tag: RouteAuth,
    component: Dashboard
  },
  {
    path: '/auth',
    name: 'Auth',
    tag: Route,
    component: Login
  },
]

/**
 * Returns application routing with protected by AuthCheck func routes
 * @param {Function} authCheck checks is user logged in
 */
export const Routing = authCheck => {
  // remove components that aren't application routes, (e.g. github link in sidebar)
  const routes = appRouting.filter(a => a.tag || a.component)
  // render components that are inside Switch (main view)
  const routesRendered = routes.map((a, i) => {
    // get tag for Route. is it RouteAuth `protected route` or Route?
    const Tag = a.tag
    const {path, exact, strict, component} = a
    // can visitor access this route?
    const canAccess = authCheck
    // select only props that we need
    const b = {path, exact, strict, component, canAccess}

    return <Tag key={i} {...b} />
  })

  return (
    <App>
      {isDev() && <DevTools />}
      <Switch>
        {routesRendered}
        <Redirect to="/dashboard" />
      </Switch>
    </App>
  )
}

function getHistory () {
  return createBrowserHistory()
}
