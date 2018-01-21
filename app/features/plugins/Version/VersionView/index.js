import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {parseFFMPEGVersion} from '../util';
import {findSoftwareVersion} from '../thunk';

class Version extends React.Component {
  componentWillMount () {
    this.props.findSoftwareVersion();
  }
  render () {
    const {ffmpegVersion, youtubeDLVersion, playerVersion} = this.props;
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

const mapStateToProps = (state) => ({
  youtubeDLVersion: state.version.youtubeDLVersion,
  ffmpegVersion: parseFFMPEGVersion(state.version.ffmpegVersion),
  playerVersion: state.version.playerVersion
});

const mapDispatchToProps = (dispatch) => ({
  findSoftwareVersion: () => dispatch(findSoftwareVersion())
});

export default connect(mapStateToProps, mapDispatchToProps)(Version);
