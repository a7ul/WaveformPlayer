import React from 'react';
import result from 'lodash/result';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as styles from './style';
import { NullView } from '../../utils/common';
import ErrorBoundary from '../../components/ErrorBoundary';


class CenterStage extends React.Component {
  getActiveView = () => {
    const { activeView, plugins = {} } = this.props;
    const activePlugin = plugins[activeView] || { plugin: {} };
    return activePlugin.plugin.view;
  }
  render() {
    const View = this.getActiveView();
    const PluginView = View || NullView;
    const { activeView, plugins = {} } = this.props;
    const activePlugin = plugins[activeView] || { plugin: {} };
    const errorMessage = `There seems to be some issue with ${activePlugin.plugin.name}(${activePlugin.plugin.id}) plugin`;
    return (
      <styles.Container>
        <ErrorBoundary errorMessage={errorMessage} >
          <PluginView />
        </ErrorBoundary>
      </styles.Container>
    );
  }
}

CenterStage.defaultProps = {

};

CenterStage.propTypes = {
  activeView: PropTypes.string.isRequired,
  plugins: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  plugins: result(state, 'pluginLoader.plugins'),
  activeView: result(state, 'centerStage.activeView')
});

const mapDispatchToProps = () => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(CenterStage);
