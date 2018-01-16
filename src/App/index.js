import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import store from './store.js'
import { Provider } from 'react-redux';
import ThemeProvider from './ThemeProvider.js';

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
 );
