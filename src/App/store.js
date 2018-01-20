import {article} from '../reducers/article.js';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { browserHistory } from 'react-router';
import { routerReducer, routerMiddleware } from 'react-router-redux';

const reducers = combineReducers({
  article,
  routing: routerReducer
});

const router = routerMiddleware(browserHistory);

const store = createStore(
  reducers,
  applyMiddleware(
    router,
    thunk,
    logger,
  )
);

export default store;
