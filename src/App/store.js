import {article} from '../reducers/article.js';
import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';

const store = createStore(
  article,
  applyMiddleware(logger)
);

export default store;
