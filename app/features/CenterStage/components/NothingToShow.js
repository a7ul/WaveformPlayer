import React from 'react';
import PropTypes from 'prop-types';
import { getActivePluginName } from '../util';
import { getPlugin } from '../../../utils/plugins';

const NothingToShow = (props) => {
  const { activePluginId } = props;
  const pluginId = activePluginId || 'No plugin specified!';
  const activePlugin = getPlugin(activePluginId);
  return (
    <div>{getActivePluginName(activePlugin)}({pluginId})</div>
  );
};

NothingToShow.defaultProps = {
  activePluginId: null
};

NothingToShow.propTypes = {
  activePluginId: PropTypes.string
};

export default NothingToShow;

