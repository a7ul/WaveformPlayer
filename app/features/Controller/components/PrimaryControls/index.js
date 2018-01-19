import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.css';
import Icon from '../../../../components/Icon';

class PrimaryControls extends React.Component {
  render () {
    const {onPlayToggle, isPlaying, onNext, onPrev} = this.props;
    return (
      <div className={styles.primaryControls}>
        <div onClick={onPlayToggle} className={styles.button}>
          {
            isPlaying
              ? <Icon name="pause" />
              : <Icon name="play_arrow" />
          }
        </div>
        <div onClick={onPrev} className={styles.button}><Icon name="skip_previous" /></div>
        <div onClick={onNext} className={styles.button}><Icon name="skip_next" /></div>
      </div>
    );
  }
}

PrimaryControls.defaultProps = {
  isPlaying: false,
  onPlayToggle: () => {},
  onNext: () => {},
  onPrev: () => {}
};

PrimaryControls.propTypes = {
  isPlaying: PropTypes.bool,
  onPlayToggle: PropTypes.func,
  onNext: PropTypes.func,
  onPrev: PropTypes.func
};

export default PrimaryControls;
