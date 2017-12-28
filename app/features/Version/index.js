import React from 'react';
import styles from './style.css';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {parseFFMPEGVersion} from './util';
import {remote} from 'electron';

class Version extends React.Component {
  render () {
    const {ffmpegVersion, youtubeDLVersion, playerVersion} = this.props;
    console.log(remote.app.getPath('home'));
    return (
      <div className={styles.version}>
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
  playerVersion: null
};

Version.propTypes = {
  ffmpegVersion: PropTypes.string,
  youtubeDLVersion: PropTypes.string,
  playerVersion: PropTypes.string
};

const mapStateToProps = (state) => ({
  youtubeDLVersion: state.version.youtubeDLVersion,
  ffmpegVersion: parseFFMPEGVersion(state.version.ffmpegVersion),
  playerVersion: state.version.playerVersion
});

const mapDispatchToProps = () => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Version);
