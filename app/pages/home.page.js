import React, {Component} from 'react';
import Home from '../components/Home/Home.component';

import {getYTDLVersion} from '../utils/youtubeDL.util';

class HomePage extends Component {
  render () {
    getYTDLVersion().then(console.log).catch(console.log);
    return <Home />;
  }
}

export default HomePage;
