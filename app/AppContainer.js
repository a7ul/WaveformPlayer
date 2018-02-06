import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { noop } from './utils/common';
import { loadAllPlugins } from './features/PluginLoader/thunk';
import { Router } from './router';

class App extends React.Component {
  componentDidMount() {
    this.props.loadPlugins();
  }
  render() {
    return (
      <Router />
    );
  }
}

App.defaultProps = {
  loadPlugins: noop
};

App.propTypes = {
  loadPlugins: PropTypes.func
};

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({
  loadPlugins: () => dispatch(loadAllPlugins())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
