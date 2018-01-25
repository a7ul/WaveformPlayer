import VersionView from './VersionView';
import { reducer } from './redux';

export const init = () => ({
  name: 'version',
  menuItems: [],
  reducer,
  sideMenuItems: [],
  settings: [],
  centerStageView: VersionView
});
