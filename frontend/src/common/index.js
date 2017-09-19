import React from 'react'

import { Root } from '../components'
import { Routing } from '../routing'
import createStore from '../store'

export const configureStore = initialState => {
  return {
    ...initialState
  }
}



export const configureRootComponent = ({
  preloadedState,
  history
}) => {
  const store = createStore(preloadedState)
  window.store = store // temporary to play around
  const propsRoot = {
    routes: Routing,
    history,
    store
  }
  return <Root {...propsRoot} />
}
