import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import ArticlesView from '../views/ArticlesView.js';
import SearchView from '../views/SearchView.js';
import MeView from '../views/MeView.js';
import CoreLayout from '../views/CoreLayout.js'

const Routes = ({ history }) => (
  <Router history={history}>
    <Route component={CoreLayout} path='/'>
      <IndexRoute component={ArticlesView} name='articles'/>
      <Route component={SearchView} path='search' name='search' />
      <Route component={MeView} path='me' name='me' />
    </Route>
  </Router>
);

export default Routes;
