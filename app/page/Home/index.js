import React from 'react';
import Controller from '../../features/Controller';
// import Version from '../../features/Version';
// import Playlist from '../../features/Playlist';
import SideBar from '../../features/SideBar';
import CenterStage from '../../features/CenterStage';
import * as styles from './style';

export default class Home extends React.Component {
  render () {
    return (
      <styles.Container>
        <styles.MainWrapper>
          <SideBar/>
          <CenterStage>
            <div>
              {/* <Version/>
              <Playlist/>*/}
            </div>
          </CenterStage>
        </styles.MainWrapper>
        <Controller/>
      </styles.Container>
    );
  }
}
