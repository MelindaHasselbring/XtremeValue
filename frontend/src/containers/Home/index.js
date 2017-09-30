import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Checkbox,
  Container,
  Divider,
  Grid,
  Header,
  Image,
  List,
  Segment
} from 'semantic-ui-react';

import { connect } from '../../utils/connect';
import './home.css';

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
        <Segment  style={{ padding: '4em 4em' }} vertical>
          <Grid columns={6}  container stackable verticalAlign="middle">
            <Grid.Row>
              <Grid.Column width={3}>
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

        {/* {this.props.isLoggedIn && <h1>Hey you are logged in!!!!</h1>} */}


        <Segment>
          <Grid columns={3}>
            <Grid.Row stretched>
              <Grid.Column>
                <Segment id="topCat">
                  <Header as="h1" inverted>Top Categories</Header>
               
                  <div class="ui_checkbox">
                    <Checkbox label={{ children: 'All' }} />
                  </div>
                  <div class="ui_checkbox">
                    <Checkbox label={{ children: 'Accessories' }} />
                  </div>
                  <div class="ui_checkbox">
                    <Checkbox label={{ children: 'Beauty' }} />
                  </div>
                  <div class="ui_checkbox">
                    <Checkbox label={{ children: 'Clothing' }} />
                  </div>
                  <div class="ui_checkbox">
                    <Checkbox label={{ children: 'Electronics' }} />
                  </div>
                  <div class="ui_checkbox">
                    <Checkbox label={{ children: 'Food' }} />
                  </div>
                  <div class="ui_checkbox">
                    <Checkbox label={{ children: 'Furniture' }} />
                  </div>
                  <div class="ui_checkbox">
                    <Checkbox label={{ children: 'Home & Garden' }} />
                  </div>
                  <div class="ui_checkbox">
                    <Checkbox label={{ children: 'Shoes' }} />
                  </div>
                  <div class="ui_checkbox">
                    <Checkbox label={{ children: 'Sporting Goods' }} />
                  </div>
                  <div class="ui_checkbox">
                    <Checkbox label={{ children: 'Travel' }} />
                  </div>
                  
                 
                  </Segment>
                  </Grid.Column>
                  <Grid.Column>
                  <Segment>
                    <Grid.Column width={3}>
                <Image

                  src="/assets/images/priceline.png"
                  as='a'
                  alt="priceline"
                  class="btn btn-default"
                  href='http://couponorcode.com/Priceline'
                  target='_blank'
                />
              </Grid.Column>
                    </Segment>

                    <Segment>
                    <Grid.Column width={3}>
                    <Image
                      src="/assets/images/flowers.png"
                      as='a'
                      alt="flowers"
                      class="btn btn-default"
                      href='https://www.1800flowers.com/save-15-affiliate-11510?utm_campaign=10621&utm_medium=affiliate&utm_content=386167&storeId=20051&utm_source=impactradius&utm_term=TEXT_LINK&cm_mmc=tagged-_-affiliate18f-_-na-_-na'
                      target='_blank'
                    />
                    </Grid.Column>
                    </Segment>
                    
                    <Segment>
                    <Grid.Column width={3}>
                    <Image
                      src="/assets/images/snapfish.png"
                      as='a'
                      alt="snapfish"
                      class="btn btn-default"
                      href='https://www.snapfish.com/photo-gift/snapfish-coupons?icid=home|1H||%20|deal-global-header|deal||oth'
                      target='_blank'
                    />
                    </Grid.Column>
                    </Segment>
                    
                    <Segment>
                    <Grid.Column width={3}>
                    <Image
                      src="/assets/images/gnc.png"
                      as='a'
                      alt="gnc"
                      class="btn btn-default"
                      href='https://www.snapfish.com/photo-gift/snapfish-coupons?icid=home|1H||%20|deal-global-header|deal||oth'
                      target='_blank'
                    />
                    </Grid.Column>
                       </Segment>
                  </Grid.Column>
                  <Grid.Column>
                    <Segment id="myWallet"> 
                    <Header as="h1" inverted>My Wallet</Header>
                    <div>
                      <Image.Group size='small' margin='5em 5em' >
                        <Image 
                        src="/assets/images/ua.png"
                        as='a'
                        alt="ua"
                      class="btn btn-default"
                      href='https://www.underarmour.com/en-us/outlet/g/6'
                      target='_blank'
                        />
                        <Image src={"/assets/images/ashleyS.png"} />
                        <Image src={"/assets/images/gap.png"} />
                        <Image src={"/assets/images/bbby.png"} />

                      </Image.Group>
                    </div>

                    </Segment>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Segment>
        <Segment inverted vertical style={{ padding: '5em 0em' }}>
          <Container>
            <Grid divided inverted stackable>
              <Grid.Row>
                <Grid.Column width={6}>
                  <Header inverted as="h4" content="About" />
                  <List link inverted>
                    <List.Item as="a">Sitemap</List.Item>
                    <List.Item as="a">Contact Us</List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column width={6}>
                  <Header inverted as="h4" content="Services" />
                  <List link inverted>
                    <List.Item as="a">Submit a Coupon</List.Item>
                    <List.Item as="a">My Wallet</List.Item>
                    <List.Item as="a">Best Rated Coupons</List.Item>
                    <List.Item as="a">Your Account</List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column width={4}>
                  <Header as="h4" inverted>
                  <p>&copy; 2017 Xtreme Value</p>
                  </Header>
                  <List link inverted>
                  <List.Item as="a">Conditions of Use</List.Item>
                  <List.Item as="a">Privacy </List.Item>
                  <List.Item as="a">Notice </List.Item>
                  <List.Item as="a">Interest-Based </List.Item>
                </List>
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
