import React, {Component} from 'react';
import PlayerControlBar from '../PlayerControlBar/PlayerControlBar.component';
import styles from './PlayerView.style';

class PlayerView extends Component {
  render () {
    return (
      <div style={styles.container}>
        <div style={styles.infoContainer} />
        <PlayerControlBar />
      </div>
    );
  }
}


export default PlayerView;
