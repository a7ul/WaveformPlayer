import React from 'react';
import createHistory from 'history/createBrowserHistory';
import {Route} from 'react-router';
import {ConnectedRouter} from 'react-router-redux';
import {routerMiddleware} from 'react-router-redux';

import Home from '../pages/home.page';

const history = createHistory();

const Routing = () => (
  <ConnectedRouter history={history}>
    <div>
      <Route exact path='/' component={Home}/>
      <Route path='/home' component={Home}/>
    </div>
  </ConnectedRouter>
);

export default Routing;
export const reduxRouterMiddleware = routerMiddleware(history);
