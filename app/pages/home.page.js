import React, {Component} from 'react';
import Home from '../components/Home/Home.component';

import {executeYoutubeDlVersion} from '../utils/process.util';

class HomePage extends Component {
  render () {
    executeYoutubeDlVersion().then(console.log).catch(console.log);
    return <Home />;
  }
}

export default HomePage;
