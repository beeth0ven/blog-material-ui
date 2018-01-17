import {article} from '../reducers/article.js';
import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const store = createStore(
  article,
  applyMiddleware(
    thunk,
    logger,
  )
);

export default store;
