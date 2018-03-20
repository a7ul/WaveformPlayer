import React from 'react';
import PropTypes from 'prop-types';

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


export default (Version);
