import { PLUGIN_NAME, PLUGIN_ID } from './config';
import { setCenterView } from '../../features/CenterStage/redux';

const sideMenuItem = {
  label: PLUGIN_NAME,
  icon: 'ondemand_video',
  action: setCenterView(PLUGIN_ID)
};

export default sideMenuItem;
