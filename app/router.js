import React from 'react';
import { Route } from 'react-router';
import { ConnectedRouter, push, goBack } from 'react-router-redux';
import Home from './page/Home';
import { routeHistory } from './redux/store';

export class Router extends React.Component {
  render() {
    return (
      <ConnectedRouter history={routeHistory}>
        <div className="fullview">
          <Route path="/" component={Home} />
          <Route path="/home" component={Home} />
        </div>
      </ConnectedRouter>
    );
  }
}

export const pushAction = push;
export const goBackAction = goBack;
