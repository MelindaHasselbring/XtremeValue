import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { Grid, Header, Segment, Container } from 'semantic-ui-react'

class LoginComponent extends Component {
  static propTypes = { }

  render () {
    return (
      <Container>
        <Grid verticalAlign="middle" centered columns={1} textAlign="center">
          <Grid.Column
            tablet={10}
            mobile={16}
            computer={6}
            style={{backgroundColour: 'white'}}
          >
            <Segment basic padded>
              <Header as='h2'>Sign In</Header>
            </Segment>
          </Grid.Column>
        </Grid>
      </Container>
    )
  }
}

export default observer(LoginComponent)
