import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Image,
  List,
  Segment
} from 'semantic-ui-react';

import { connect } from '../../utils/connect';
import './home.scss';

class Home extends Component {
  static propTypes = {
    title: PropTypes.string,
    location: PropTypes.object,
    history: PropTypes.object,

    isLoggedIn: PropTypes.bool

    // couponStore: PropTypes.object
  };

  navigateTo = to => {
    const { history } = this.props;
    history.replace(`${to}`);
  };

  render() {
    console.log('Rendering Home component!');

    console.log(this.props.couponStore);

    if (this.props.isLoggedIn) {
      console.log('We are logged in!');
    }

    return (
      <div>
        <Segment style={{ padding: '4em 0em' }} vertical>
          <Grid columns={6} divided container stackable verticalAlign="middle">
            <Grid.Row>
              <Grid.Column width={2.5}>
                <Image
                  src="/assets/images/kols30.png"
                  alt="kols30"
                  class="ui button"
                  onClick={() => this.navigateTo('/')}
                />
              </Grid.Column>

              <Grid.Column width={3}>
                <Image
                  src="/assets/images/Joann60.png"
                  alt="Joann60"
                  max-height="75px"
                  onClick={() => this.navigateTo('/')}
                />
              </Grid.Column>
              <Grid.Column width={3}>
                <Image
                  src="/assets/images/payless.png"
                  alt="payless"
                  onClick={() => this.navigateTo('/')}
                />
              </Grid.Column>
              <Grid.Column width={3}>
                <Image
                  src="/assets/images/pza.png"
                  alt="pza"
                  onClick={() => this.navigateTo('/')}
                />
              </Grid.Column>
              <Grid.Column width={3}>
                <Image
                  src="/assets/images/michaels2.png"
                  alt="michaels2"
                  class="btn btn-default"
                  onClick={() => this.navigateTo('/')}
                />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column textAlign="center" />
            </Grid.Row>
          </Grid>
        </Segment>

        {this.props.isLoggedIn && <h1>Hey you are logged in!!!!</h1>}

        <Segment>
          <Grid columns={3} divided>
            <Grid.Row stretched>
              <Grid.Column>
                <Segment>
                  Top Categories
                  <div class="checkbox">
                    <input type="checkbox" name="clothing" />
                    <label> All</label>
                  </div>
                  <div class="ui_checkbox">
                    <input type="checkbox" name="accessories" />
                    <label> Accessories</label>
                  </div>
                  <div class="ui_checkbox">
                    <input type="checkbox" name="beauty" />
                    <label> Beauty</label>
                  </div>
                  <div class="ui checkbox">
                    <input type="checkbox" name="clothing" />
                    <label> Clothing</label>
                  </div>
                  <div class="ui_checkbox">
                    <input type="checkbox" name="electronics" />
                    <label> Electronics</label>
                  </div>
                  <div class="ui checkbox">
                    <input type="checkbox" name="food" />
                    <label> Food</label>
                  </div>
                  <div class="ui checkbox">
                    <input type="checkbox" name="food" />
                    <label> Furniture</label>
                  </div>
                  <div class="ui_checkbox">
                    <input type="checkbox" name="home & garden" />
                    <label> Home & Garden</label>
                  </div>
                  <div class="ui_checkbox">
                    <input type="checkbox" name="shoes" />
                    <label> Shoes</label>
                  </div>
                  <div class="ui_checkbox">
                    <input type="checkbox" name="sporting goods" />
                    <label> Sporting Goods</label>
                  </div>
                  <div class="ui_checkbox">
                    <input type="checkbox" name="Travel" />
                    <label> Travel</label>
                  </div>
                  <div>
                    <br />
                    <br />
                    <br />
                    <p>
                      {' '}How do I create fexlible grid? This category panel
                      seems too wide and coupon panel needs to be wider.
                    </p>
                  </div>
                  </Segment>
                  </Grid.Column>
                  <Grid.Column>
                    <Segment>Coupons from API goes here.</Segment>
                    <Segment>How do I display the coupons here from the API.</Segment>
                    <Segment>1. Default = Display All</Segment>
                    <Segment>2. Coupons per "checbox" category displays here.  </Segment>
                    <Segment>3. Coupons when searched from the search box displays here.</Segment>
                    <Segment></Segment>
                    <Segment></Segment>
                  </Grid.Column>
                  <Grid.Column>
                    <Segment> 
                      <p>1.) When user clicked on on the saved button, red star appears and tag coupon as saved and display it here.</p>
                      <p>2.) When user clicks the save button but were not signed in yet,  the login widget shall display to allow the user to login. </p>
                      <p>3.) Only logged in users are allowed to save coupons.</p>
                    </Segment>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Segment>
    
            <Segment style={{ padding: '4em 0em' }} vertical>
              <div id="logo">
              <Grid columns={6} divided container stackable verticalAlign="middle">
                <Grid.Row>
                  <Grid.Column width={2.5}>
    
                      <Image
                        src="/assets/images/xtreme_720.jpg"
                        alt="kols30"
                        class="ui button"
                        onClick={() => this.navigateTo('/')}
                      />
    
                  </Grid.Column>
                  
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column textAlign="center" />
                </Grid.Row>
              </Grid>
              </div>
            </Segment>

        
        <Segment inverted vertical style={{ padding: '5em 0em' }}>
          <Container>
            <Grid divided inverted stackable>
              <Grid.Row>
                <Grid.Column width={3}>
                  <Header inverted as="h4" content="About" />
                  <List link inverted>
                    <List.Item as="a">Sitemap</List.Item>
                    <List.Item as="a">Contact Us</List.Item>

                  </List>
                </Grid.Column>
                <Grid.Column width={3}>
                  <Header inverted as="h4" content="Services" />
                  <List link inverted>
                    <List.Item as="a"></List.Item>
                    <List.Item as="a"></List.Item>
                    <List.Item as="a"></List.Item>
                    <List.Item as="a"></List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column width={7}>
                  <Header as="h4" inverted>
                    Footer Header
                  </Header>
                  <p>
                    Extra space for a call to action inside the footer that
                    could help re-engage users.
                  </p>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </Segment>
      </div>
    );
  }
}

function selector({ store }) {
  return {
    isLoggedIn: store.user.isLoggedIn,

    couponStore: store.couponStore.availableCoupons

  };
}

export default connect(selector)(Home);
