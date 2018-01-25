import React from 'react';
import path from 'path';
import { connect } from 'react-redux';
import { getPluginList, loadPlugins } from './features/PluginLoader/util';
import { Router } from './router';
import logger from './utils/logger';

getPluginList(path.resolve(__dirname, './plugins'))
  .then(plugins => loadPlugins(plugins))
  .then(d => logger.info(d))
  .catch(err => logger.error(err));

class App extends React.Component {
  render() {
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
