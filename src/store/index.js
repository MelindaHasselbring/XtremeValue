import { observable } from 'mobx';

export class Store {
  user = observable({ isLoggedIn: false });

  couponStore = observable({
    availableCoupons: []
  });

  constructor(initialState) {
    if (initialState) {
      Object.keys(initialState).forEach(key => {
        this[key] = observable(initialState[key]);
      });
    }
  }
}

export default function createStore(initialState = {}) {
  console.log(initialState);
  return new Store(initialState);
}
