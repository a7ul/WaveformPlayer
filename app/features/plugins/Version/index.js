// - close/show action for center stage
import React from 'react';
import VersionView from './VersionView';
import {reducer} from './redux';

const init = () => ({
  name: 'version',
  menuItems: [],
  reducer,
  sideMenuItems: [],
  settings: [],
  centerStageView: VersionView
});

export default init;
