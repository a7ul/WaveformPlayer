import VersionView from './VersionView';
import { reducer } from './redux';
import menu from './menuItem';

export const init = () => ({
  name: 'version',
  menuItem: menu,
  reducer,
  sideMenuItem: [],
  settings: [],
  centerStageView: VersionView
});
