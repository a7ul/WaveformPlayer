import React from 'react';
import result from 'lodash/result';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as styles from './style';
import ErrorBoundary from '../../components/ErrorBoundary';
import NothingToShow from './components/NothingToShow';
import { getActivePluginName } from './util';
import { getPlugin } from '../../utils/plugins';

class CenterStage extends React.Component {
  getNullView = () => {
    const nothingToShowComponent = () => <NothingToShow activePluginId={this.props.activePluginId} />;
    return nothingToShowComponent;
  }
  getActiveView = (activePlugin) => (activePlugin && activePlugin.view ? activePlugin.view : this.getNullView())

  render() {
    const { activePluginId } = this.props;
    const activePlugin = getPlugin(activePluginId);
    const PluginView = this.getActiveView(activePlugin);
    const errorMessage = `There seems to be some issue with ${getActivePluginName(activePlugin)}(${activePluginId}) plugin`;
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
  activePluginId: ''
};

CenterStage.propTypes = {
  activePluginId: PropTypes.string
};

const mapStateToProps = (state) => ({
  activePluginId: result(state, 'centerStage.activePluginId')
});

const mapDispatchToProps = () => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(CenterStage);
