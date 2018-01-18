import React from 'react';
import ReactDOM from 'react-dom';
import store, { history } from './store.js'
import { Provider } from 'react-redux';
import ThemeProvider from './ThemeProvider.js';
import Routes from '../routes';

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider>
      <Routes history={history}/>
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
 );
