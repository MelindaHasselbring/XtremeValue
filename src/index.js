import { render } from 'react-dom';
import { history } from './routing';
import registerServiceWorker from './registerServiceWorker';
import 'semantic-ui-css/semantic.css';
import './styles/index.scss';
import { configureRootComponent } from './common';

if (process.env.NODE_ENV === 'production') {
  registerServiceWorker();
}


if (process.env.NODE_ENV === 'dev') {
	mongoose.connect("mongodb://localhost:3000");
} else {
  	mongoose.connect("mongodb://heroku_trll5fwq:nd8nbtu86l46ll5t2g9j20jmsd@ds155424.mlab.com:55424/heroku_trll5fwq");	
}

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('Connected');
    app.listen(port, function() {
        console.log('listening on ' + port);
    });
});

const couponModelStub = {

  code: 'ABCDE1234',
  category: 'clothing',
  storeName: 'Marshalls'

}

/**
 * Setup defaults eg: if user is logged in or not.. get user from the API
 */
const preloadedState = {
  user: {
    isLoggedIn: true
  },
  couponStore: {
    availableCoupons: [ 
      couponModelStub,  
      couponModelStub,
      couponModelStub]
  }
};

const RootComponent = configureRootComponent({
  preloadedState,
  history
});

render(RootComponent, document.getElementById('root'));
