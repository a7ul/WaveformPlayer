import React, {Component} from 'react';
import styles from './PlayerControlBar.component.style';

class PlayerControlBar extends Component {
  render () {
    return (
      <div style={styles.container}>
        <div style={styles.item}>icon</div>
        <div style={styles.item}>
          <div>song title</div>
          <div>artist</div>
        </div>
        <div style={styles.item}>previous</div>
        <div style={styles.item}>play</div>
        <div style={styles.item}>next</div>
        <div style={styles.item}>progress bar</div>
        <div style={styles.item}>repeat</div>
        <div style={styles.item}>favourite</div>
        <div style={styles.item}>shuffle</div>
        <div style={styles.item}>youtube</div>
      </div>
    );
  }
}


export default PlayerControlBar;
