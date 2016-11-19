import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import HelloWorld from './components/HelloWorld';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HelloWorld}/>
    
  </Route>
);
