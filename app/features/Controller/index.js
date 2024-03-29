import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as styles from './style';
import PrimaryControls from './components/PrimaryControls';
import * as actions from './redux';
import { decodeAudio, MusicSource } from '../../utils/audio';
import { readFileToArrayBuffer } from '../../utils/common';
import CurrentPlaying from './components/CurrentPlaying';

let mSource = null;
readFileToArrayBuffer('/Users/atulr/Desktop/AlanWalker_Faded.mp3')
  .then(decodeAudio)
  .then((audioBuffer) => {
    mSource = new MusicSource(audioBuffer);
    mSource.setOnTickHandler((d) => console.log('TICK', d));
    console.log('Alldone');
  })
  .then(console.log)
  .catch(console.log);

class Controller extends React.Component {
  togglePlay = () => {
    const { setPlayStatus, isPlaying } = this.props;
    setPlayStatus(!isPlaying);
    if (mSource) {
      if (!isPlaying) {
        mSource.play();
        console.log('PLAYING');
      } else {
        mSource.pause();
        console.log('PAUSE');
      }
    }
  }

  render() {
    const { isPlaying, onNext, onPrev } = this.props;
    return (
      <styles.Container>
        <CurrentPlaying />
        <PrimaryControls
          onPlayToggle={this.togglePlay}
          isPlaying={isPlaying}
          onNext={onNext}
          onPrev={onPrev}
        />
      </styles.Container>
    );
  }
}

Controller.defaultProps = {
  setPlayStatus: () => {},
  isPlaying: false,
  onNext: () => {},
  onPrev: () => {}
};

Controller.propTypes = {
  setPlayStatus: PropTypes.func,
  isPlaying: PropTypes.bool,
  onNext: PropTypes.func,
  onPrev: PropTypes.func
};

const mapStateToProps = (state) => ({
  isPlaying: state.controller.isPlaying
});

const mapDispatchToProps = (dispatch) => ({
  setPlayStatus: (status) => dispatch(actions.setPlayStatus(status)),
  onNext: () => {
    // mSource.seek(mSource.playbackTime + 3);
  },
  onPrev: () => {
    // mSource.stop();
    // mSource.seek(mSource.playbackTime - 3);
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Controller);
