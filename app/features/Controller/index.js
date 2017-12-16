import React from 'react';
import styles from './style.css';

class Controller extends React.Component {
  render () {
    return (
      <div className={styles.controller}>
        <div>Play</div>
        <div>Pause</div>
        <div>Prev</div>
        <div>Next</div>
      </div>
    );
  }
}

Controller.defaultProps = {

};

Controller.propTypes = {

};

export default Controller;
