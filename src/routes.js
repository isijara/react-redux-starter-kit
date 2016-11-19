import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import HelloWorld from './components/HelloWorld';
import SeriesPage from './components/series/SeriesPage';
import ManageSerieForm from './components/series/ManageSerieForm';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HelloWorld}/>
    <Route path="/series" component={SeriesPage}/>
    <Route path="/serie" component={ManageSerieForm}/>
  </Route>
);
