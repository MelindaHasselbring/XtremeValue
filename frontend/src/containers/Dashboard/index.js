import React, { Component } from 'react'
import { observer } from 'mobx-react'
import DashboardComponent from './components'

class Dashboard extends Component {
  static propTypes = { }

  render () {
    return <DashboardComponent {...this.props} />
  }
}

export default observer(Dashboard)
