import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './style';
import Icon from '../../../../components/Icon';

class PrimaryControls extends React.Component {
  render () {
    const {onPlayToggle, isPlaying, onNext, onPrev} = this.props;
    return (
      <styles.Container>
        <styles.Button onClick={onPlayToggle}>
          {
            isPlaying
              ? <Icon name="pause" />
              : <Icon name="play_arrow" />
          }
        </styles.Button>
        <styles.Button onClick={onPrev}><Icon name="skip_previous" /></styles.Button>
        <styles.Button onClick={onNext}><Icon name="skip_next" /></styles.Button>
      </styles.Container>
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
