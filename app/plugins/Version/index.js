// - close/show action for center stage
import React from 'react';
import VersionView from './VersionView';
import {reducer} from './redux';

export const init = () => ({
  name: 'version',
  menuItems: [],
  reducer,
  sideMenuItems: [],
  settings: [],
  centerStageView: VersionView
});
