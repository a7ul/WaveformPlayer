import React from 'react';
import {Router} from './router';
import {connect} from 'react-redux';
import {getPluginList, loadPlugins} from './utils/plugin';
import path from 'path';
import logger from './utils/logger';

getPluginList(path.resolve(__dirname, './plugins'))
  .then((plugins) => loadPlugins(plugins))
  .then((d) => logger.info(d))
  .catch((err) => logger.error(err));

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
