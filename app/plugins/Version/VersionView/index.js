import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { parseFFMPEGVersion } from '../util';
import { findSoftwareVersion } from '../thunk';
import { PLUGIN_ID } from '../config';

class Version extends React.Component {
  componentWillMount() {
    this.props.findSoftwareVersion();
  }
  render() {
    const { ffmpegVersion, youtubeDLVersion, playerVersion } = this.props;
    return (
      <div>
        FFMPEG: {ffmpegVersion}
        YOUTUBEDL: {youtubeDLVersion}
        PLAYER: {playerVersion}
      </div>
    );
  }
}

Version.defaultProps = {
  ffmpegVersion: null,
  youtubeDLVersion: null,
  playerVersion: null,
  findSoftwareVersion: PropTypes.func
};

Version.propTypes = {
  ffmpegVersion: PropTypes.string,
  youtubeDLVersion: PropTypes.string,
  playerVersion: PropTypes.string,
  findSoftwareVersion: PropTypes.func
};

const mapStateToProps = (state) => {
  const stateProps = {
    youtubeDLVersion: state.plugins[PLUGIN_ID].youtubeDLVersion,
    ffmpegVersion: parseFFMPEGVersion(state.plugins[PLUGIN_ID].ffmpegVersion),
    playerVersion: state.plugins[PLUGIN_ID].playerVersion
  };
  return stateProps;
};

const mapDispatchToProps = (dispatch) => ({
  findSoftwareVersion: () => dispatch(findSoftwareVersion())
});

export default connect(mapStateToProps, mapDispatchToProps)(Version);
