import { showVersionModal } from './thunk';

const menuItem = {
  label: 'Version',
  submenu: [{ label: 'Something', action: showVersionModal() }]
};

export default menuItem;
