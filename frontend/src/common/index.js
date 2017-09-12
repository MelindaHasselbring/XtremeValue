import React from 'react'

import { Root } from '../components'
import { Routing } from '../routing'

export const configureStore = initialState => {
  return {
    ...initialState
  }
}

export const configureRootComponent = (store, history) => {
  const propsRoot = {
    routes: Routing,
    history,
    store
  }
  return <Root {...propsRoot} />
}
