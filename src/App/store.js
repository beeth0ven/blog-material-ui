import {article} from '../reducers/article.js';
import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import { createEpicMiddleware } from 'redux-observable';
import { getArticlesEpic } from '../actions/article.js';

const epicMiddleware = createEpicMiddleware(getArticlesEpic)

const store = createStore(
  article,
  applyMiddleware(logger),
  applyMiddleware(epicMiddleware)
);

export default store;
