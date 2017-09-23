import { observer, inject } from 'mobx-react'
import { withRouter } from 'react-router'

/**
 * 
 * @param {Array} funcs 
 */
export function compose (...funcs) {
  if (funcs.length === 0) {
    return arg => arg
  }
  if (funcs.length === 1) {
    return funcs[0]
  }

  return funcs.reduce((a, b) => (...args) => a(b(...args)))
}

/**
 * 
 * @param {*} selectorFunction 
 */
export function connect (selectorFunction) {
  return ComponentToConnect => inject(selectorFunction)(observer(ComponentToConnect))
}

/**
 * 
 * @param {*} selectorFunction 
 */
export function connectRouter (selectorFunction) {
  return ComponentToConnect => withRouter(inject(selectorFunction)(observer(ComponentToConnect)))
}
