import { render } from 'react-dom';
import { history } from './routing';
import registerServiceWorker from './registerServiceWorker';
import 'semantic-ui-css/semantic.css';
import './styles/index.scss';
import { configureRootComponent } from './common';

if (process.env.NODE_ENV === 'production') {
  registerServiceWorker();
}

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
