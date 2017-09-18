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
    history: PropTypes.object
  };
  navigateTo = to => {
    const { history } = this.props;
    history.replace(`${to}`);
  };

  render() {
    return (
      <div>
        <Segment style={{ padding: '4em 0em' }} vertical>
          <Grid container stackable verticalAlign="middle">
            <Grid.Row>
              <Grid.Column width={2}>
                <button id="carousel">
                  <Image
                    src="/assets/images/kols30.png"
                    alt="kols30"
                    class="w3-card-4"
                    onClick={() => this.navigateTo('/')}
                  />
                </button>
              </Grid.Column>
              <Grid.Column width={2}>
                <button id="carousel">
                  <Image
                    src="/assets/images/michaels2.png"
                    alt="michaels2"
                    class="btn btn-default"
                    onClick={() => this.navigateTo('/')}
                  />
                </button>
              </Grid.Column>
              <Grid.Column width={2}>
                <button id="carousel">
                  <Image
                    src="/assets/images/bbby20.png"
                    alt="bbby20"
                    onClick={() => this.navigateTo('/')}
                  />
                </button>
              </Grid.Column>
              <Grid.Column width={2}>
                <button id="carousel">
                  <Image
                    src="/assets/images/Joann60.png"
                    alt="Joann60"
                    onClick={() => this.navigateTo('/')}
                  />
                </button>
              </Grid.Column>
              <Grid.Column width={2}>
                <button id="carousel">
                  <Image
                    src="/assets/images/payless.png"
                    alt="payless"
                    onClick={() => this.navigateTo('/')}
                  />
                </button>
              </Grid.Column>
              <Grid.Column width={2}>
                <button id="carousel">
                  <Image
                    src="/assets/images/pza.png"
                    alt="pza"
                    onClick={() => this.navigateTo('/')}
                  />
                </button>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column textAlign="center" />
            </Grid.Row>
          </Grid>
        </Segment>

        <Segment style={{ padding: '0em' }} vertical>
          <Grid celled="internally" columns="equal" stackable>
            <Grid.Row textAlign="center">
              <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                <Header as="h3" style={{ fontSize: '2em' }}>
                  "How do I devide this row into 3 columns?"
                </Header>
                <p style={{ fontSize: '1.33em' }}>
                  Doesn't look like react-bootstrap-columns is the solution.
                </p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>

        <Segment style={{ padding: '0em' }} vertical>
          <Grid celled="internally" columns="equal" stackable>
            <Grid.Row textAlign="center">
              <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                <Header as="h3" style={{ fontSize: '2em' }}>
                  "What a Company"
                </Header>
                <p style={{ fontSize: '1.33em' }}>
                  That is what they all say about us
                </p>
              </Grid.Column>
              <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                <Header as="h3" style={{ fontSize: '2em' }}>
                  "I shouldn't have gone with their competitor."
                </Header>
                <p style={{ fontSize: '1.33em' }}>
                  <Image avatar src="/assets/images/avatar/large/nan.jpg" />
                  <b>Nan</b> Chief Fun Officer Acme Toys
                </p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>

        <Segment style={{ padding: '8em 0em' }} vertical>
          <Container text>
            <Header as="h3" style={{ fontSize: '2em' }}>
              Breaking The Grid, Grabs Your Attention
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              Instead of focusing on content creation and hard work, we have
              learned how to master the art of doing nothing by providing
              massive amounts of whitespace and generic content that can seem
              massive, monolithic and worth your attention.
            </p>
            <Button as="a" size="large">
              Read More
            </Button>

            <Divider
              as="h4"
              className="header"
              horizontal
              style={{ margin: '3em 0em', textTransform: 'uppercase' }}
            />

            <Header as="h3" style={{ fontSize: '2em' }}>
              Did We Tell You About Our Bananas?
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              Yes I know you probably disregarded the earlier boasts as
              non-sequitur filler content, but its really true. It took years of
              gene splicing and combinatory DNA research, but our bananas can
              really dance.
            </p>
            <Button as="a" size="large">
              I'm Still Quite Interested
            </Button>
          </Container>
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
                    <List.Item as="a">Religious Ceremonies</List.Item>
                    <List.Item as="a">Gazebo Plans</List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column width={3}>
                  <Header inverted as="h4" content="Services" />
                  <List link inverted>
                    <List.Item as="a">Banana Pre-Order</List.Item>
                    <List.Item as="a">DNA FAQ</List.Item>
                    <List.Item as="a">How To Access</List.Item>
                    <List.Item as="a">Favorite X-Men</List.Item>
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

Home.propTypes = {
  history: PropTypes.object.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
};

function selector({ store }) {
  return {
    isLoggedIn: store.user.isLoggedIn
  };
}

export default connect(selector)(Home);
