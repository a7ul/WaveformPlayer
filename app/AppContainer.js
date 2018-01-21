import React from 'react';
import {Router} from './router';
import {connect} from 'react-redux';

class App extends React.Component {
  render () {
    return (
      <Router />
    );
  }
}

App.defaultProps = {};

App.propTypes = {};

const mapStateToProps = () => ({});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(App);
