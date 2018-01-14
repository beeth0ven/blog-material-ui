import articleReducer from '../reducers/article.js';
import {createStore} from 'redux';

const store = createStore(articleReducer);

export default store;
