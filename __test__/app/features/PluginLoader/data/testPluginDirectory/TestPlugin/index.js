import TestPluginView from './TestPluginView';
import { reducer } from './redux';

export const init = () => ({
  name: 'testPlugin',
  menuItems: [],
  reducer,
  sideMenuItems: [],
  settings: [],
  centerStageView: TestPluginView
});
