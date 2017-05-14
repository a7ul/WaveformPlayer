import React, {Component} from 'react';
import Home from '../components/Home/Home.component';
import {downLoadVideo} from '../utils/youtubeDL.util';

class HomePage extends Component {
  render () {
    downLoadVideo('https://www.youtube.com/watch?v=04zaL7wIbmc', console.log).then(console.log).catch(console.log);
    return <Home />;
  }
}

export default HomePage;
