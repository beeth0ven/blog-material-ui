import {article} from '../reducers/article.js';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

const reducers = combineReducers({
  article,
  routing: routerReducer
});

const store = createStore(
  reducers,
  applyMiddleware(
    thunk,
    logger,
  )
);

const history = syncHistoryWithStore(browserHistory, store);

export default store;
export { history };
