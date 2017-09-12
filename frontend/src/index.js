import { render } from 'react-dom'
import { history } from './routing'
import registerServiceWorker from './registerServiceWorker';
import 'semantic-ui-css/semantic.css'
import './styles/index.scss'
import { configureRootComponent } from './common'

if (process.env.NODE_ENV === 'production') {
  registerServiceWorker();
}

/**
 * Setup defaults eg: if user is logged in or not.. get user from the API
 */
const preloadedState = {
  user: {
    isLoggedIn: false,
  }
}

const RootComponent = configureRootComponent(preloadedState, history)

render(RootComponent, document.getElementById('root'))
