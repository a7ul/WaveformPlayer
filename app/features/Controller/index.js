import React from 'react';
import styles from './style.css';
import PrimaryControls from './components/PrimaryControls';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from './redux';

class Controller extends React.Component {
  render () {
    const {togglePlay, isPlaying, onNext, onPrev} = this.props;
    return (
      <div className={styles.controller}>
        <PrimaryControls onPlayToggle={togglePlay} isPlaying={isPlaying} onNext={onNext} onPrev={onPrev}/>
      </div>
    );
  }
}

Controller.defaultProps = {
  togglePlay: () => {},
  isPlaying: false,
  onNext: () => {},
  onPrev: () => {}
};

Controller.propTypes = {
  togglePlay: PropTypes.func,
  isPlaying: PropTypes.bool,
  onNext: PropTypes.func,
  onPrev: PropTypes.func
};

const mapStateToProps = (state) => ({
  isPlaying: state.controller.isPlaying
});

const mapDispatchToProps = (dispatch) => ({
  togglePlay: () => dispatch(actions.togglePlay())
});

export default connect(mapStateToProps, mapDispatchToProps)(Controller);
