import { observable } from 'mobx'

export class Store {

  user = observable({ isLoggedIn: false })

  couponStore = observable({
    search: '',
    availableCoupons: []
  })

  constructor(initialState) {
    if (initialState) {
      Object
        .keys(initialState)
        .forEach( key => {
          this[key] = observable(initialState[key])
      })
    }
  }



}

export default function createStore(initialState = {}) {
  return new Store(initialState)
}