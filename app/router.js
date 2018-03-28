import React from 'react';
import { Route } from 'react-router-dom';
import { ConnectedRouter, push, goBack } from 'react-router-redux';
import Home from './page/Home';
import { routeHistory } from './redux/store';

export const Router = (props) => (
  <ConnectedRouter history={routeHistory} {...props} >
    <div className="spreadView">
      <Route path="/" component={Home} />
      <Route path="/home" component={Home} />
    </div>
  </ConnectedRouter>
);

Router.defaultProps = {};
Router.propTypes = {};

export const pushAction = push;
export const goBackAction = goBack;
