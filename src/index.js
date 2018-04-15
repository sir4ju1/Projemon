import { Provider } from 'preact-redux';
import store from './store';
import 'mini.css/dist/mini-pwa.min.css';
// import 'material-design-icons/iconfont/material-icons.css';

import './style';
import App from './components/app';

export default () => (
  <Provider store={store}>
    <App />
  </Provider>
);
