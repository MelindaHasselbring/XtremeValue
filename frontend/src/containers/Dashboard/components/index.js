import React, { Component } from 'react'
import { Container, Grid } from 'semantic-ui-react'
import { observer } from 'mobx-react'

class DashboardComponent extends Component {
  render () {
    return (
      <Container>
        <Grid columns={1}>
          <Grid.Row centered>
            <Grid.Column width={16}>
              Welcome to our Dashboard! This is a protected route
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    )
  }
}

export default observer(DashboardComponent)
