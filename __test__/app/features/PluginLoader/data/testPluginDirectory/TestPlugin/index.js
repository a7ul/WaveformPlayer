import TestPluginView from './TestPluginView';
import { reducer } from './redux';

export const init = () => ({
  name: 'testPlugin',
  menuItem: {},
  reducer,
  sideMenuItem: {},
  settings: [],
  centerStageView: TestPluginView
});
