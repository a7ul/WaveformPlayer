import React from 'react';
import styles from './style.css';
import Icon from '../Shared/Icon';

class Controller extends React.Component {
  render () {
    return (
      <div className={styles.controller}>
        <div><Icon name="play_arrow" /></div>
        <div><Icon name="pause" /></div>
        <div><Icon name="skip_previous" /></div>
        <div><Icon name="skip_next" /></div>
      </div>
    );
  }
}

Controller.defaultProps = {

};

Controller.propTypes = {

};

export default Controller;
