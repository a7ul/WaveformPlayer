import React, {Component} from 'react';
import Home from '../components/Home/Home.component';
import {getVideoMetaData} from '../utils/youtubeDL.util';

class HomePage extends Component {
  render () {
    getVideoMetaData('https://www.youtube.com/watch?v=04zaL7wIbmc').then(console.log).catch(console.log);
    return <Home />;
  }
}

export default HomePage;
