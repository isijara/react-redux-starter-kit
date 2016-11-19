/* eslint-disable no-console */
import React from 'react';
import { createStore }          from 'redux';
import { render }               from 'react-dom';
import { Provider }             from 'react-redux';
import { Router, hashHistory }  from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import DevTools from './devTools/DevTools';

import routes         from './routes';
import configureStore from './store/configureStore';


const store = configureStore();
const history = syncHistoryWithStore(hashHistory, store);

render((
  <Provider store={store}>
    <div>
      <Router history={history} routes={routes} />
      <DevTools />
    </div>
  </Provider>
), document.getElementById('app'));
