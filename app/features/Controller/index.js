import React from 'react';
import styles from './style.css';
import PrimaryControls from './components/PrimaryControls';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from './redux';
import {playSong} from '../../utils/audio';

class Controller extends React.Component {
  togglePlay = () => {
    const {setPlayStatus, isPlaying} = this.props;
    setPlayStatus(!isPlaying);
  }

  render () {
    const {isPlaying, onNext, onPrev} = this.props;
    return (
      <div className={styles.controller}>
        <PrimaryControls onPlayToggle={this.togglePlay} isPlaying={isPlaying} onNext={onNext} onPrev={onPrev}/>
      </div>
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
    playSong('/Users/atulr/Projects/Hobby/yplayer/app/features/Controller/stereo.mp3');
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Controller);
