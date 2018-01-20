import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import store from './store.js';

export default syncHistoryWithStore(browserHistory, store);
