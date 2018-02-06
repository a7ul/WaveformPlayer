import VersionView from './VersionView';
import { reducer } from './redux';
import saga from './saga';
import menu from './menuItem';

export const init = () => ({
  name: 'version',
  menuItem: menu,
  reducer,
  saga,
  sideMenuItem: [],
  settings: [],
  centerStageView: VersionView
});
