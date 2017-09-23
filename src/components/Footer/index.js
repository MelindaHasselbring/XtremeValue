import React from 'react'
import { Grid, Header, Image } from 'semantic-ui-react'
import { observer } from 'mobx-react'
import './Footer.scss'

const Footer = () => (
  <footer>
    <div className="footer-inner">
      <Grid>
        <Grid.Row>
          <Grid.Column width={4}>
            <Image size="tiny" src="/images/logo.png" />
          </Grid.Column>
          <Grid.Column width={4}>
            <Header as="h4" inverted>Legal</Header>
          </Grid.Column>
          <Grid.Column width={4}>
            <Header as="h4" inverted>Resources</Header>
          </Grid.Column>
          <Grid.Column width={4}>
            <Header as="h4" inverted>About Us</Header>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  </footer>
)

export default observer(Footer)
