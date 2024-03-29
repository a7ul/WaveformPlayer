import { remote } from 'electron';

const { app } = remote;

export const appMenu = {
  id: 'appMenu',
  label: app.getName(),
  submenu: [
    { role: 'about' },
    { type: 'separator' },
    { role: 'services', submenu: [] },
    { type: 'separator' },
    { role: 'hide' },
    { role: 'hideothers' },
    { role: 'unhide' },
    { type: 'separator' },
    { role: 'quit' }
  ]
};

export const EditMenu = {
  id: 'editMenu',
  label: 'Edit',
  submenu: [
    { role: 'undo' },
    { role: 'redo' },
    { type: 'separator' },
    { role: 'cut' },
    { role: 'copy' },
    { role: 'paste' },
    { role: 'pasteandmatchstyle' },
    { role: 'delete' },
    { role: 'selectall' }
  ]
};

export const viewMenu = {
  id: 'viewMenu',
  label: 'View',
  submenu: [
    { role: 'reload' },
    { role: 'forcereload' },
    { role: 'toggledevtools' },
    { type: 'separator' },
    { role: 'togglefullscreen' }
  ]
};
export const windowMenu = {
  id: 'windowMenu',
  label: 'Window',
  role: 'window',
  submenu: [
    { role: 'minimize' },
    { role: 'close' },
    { role: 'front' }
  ]
};
export const helpMenu = {
  id: 'helpMenu',
  label: 'Help',
  role: 'help',
  submenu: [
    {
      label: 'Learn More',
      click() { require('electron').shell.openExternal('https://electronjs.org'); }
    }
  ]
};
export const pluginMenu = {
  id: 'pluginMenu',
  label: 'Plugins',
  submenu: []
};
