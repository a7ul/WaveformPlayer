import React from 'react';
import Controller from '../../features/Controller';
import SideBar from '../../features/SideMenu';
import CenterStage from '../../features/CenterStage';
import * as styles from './style';

export default class Home extends React.PureComponent {
  render() {
    return (
      <styles.Container>
        <styles.MainWrapper>
          <SideBar />
          <CenterStage />
        </styles.MainWrapper>
        <Controller />
      </styles.Container>
    );
  }
}
