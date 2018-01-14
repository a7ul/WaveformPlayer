import React from 'react';
import Controller from '../../features/Controller';
import Version from '../../features/Version';
import Playlist from '../../features/Playlist';
import styles from './style.css';
import SideBar from '../../features/SideBar';
import CenterStage from '../../features/CenterStage';

class Home extends React.Component {
  render () {
    return (
      <div className={styles.home}>
        <div className={styles.exceptController}>
          <SideBar/>
          <CenterStage>
            <div>
              <Version/>
              <Playlist/>
            </div>
          </CenterStage>
        </div>
        <Controller/>
      </div>
    );
  }
}

export default Home;
