import React, {Component} from 'react';
import PlayerView from '../../components/playerView/PlayerView.component';
import {getVideoMetaData} from '../../utils/youtubeDL.util';

class HomePage extends Component {
  render () {
    getVideoMetaData('https://www.youtube.com/watch?v=04zaL7wIbmc').then(JSON.parse).then(console.log).catch(console.log);
    return (
      <PlayerView />
    );
  }
}

export default HomePage;
