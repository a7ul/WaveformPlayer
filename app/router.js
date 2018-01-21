import React from 'react';
import createHistory from 'history/createBrowserHistory';
import {Route} from 'react-router';
import {ConnectedRouter, routerMiddleware, push, goBack} from 'react-router-redux';
import Home from './page/Home';

const routeHistory = createHistory();

export class Router extends React.Component {
  render () {
    return (
      <ConnectedRouter history={routeHistory}>
        <div className="fullview">
          <Route path="/" component={Home}/>
          <Route path="/home" component={Home}/>
        </div>
      </ConnectedRouter>
    );
  }
}

export const reduxRouterMiddleware = routerMiddleware(history);
export const pushAction = push;
export const goBackAction = goBack;