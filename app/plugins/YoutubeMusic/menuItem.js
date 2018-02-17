import { PLUGIN_NAME, PLUGIN_ID } from './config';
import { setCenterView } from '../../features/CenterStage/redux';

const menuItem = {
  label: PLUGIN_NAME,
  action: setCenterView(PLUGIN_ID)
};

export default menuItem;
