/* eslint-disable no-console */

const devToolsInstaller = require('electron-devtools-installer');

const { REACT_DEVELOPER_TOOLS, REDUX_DEVTOOLS } = devToolsInstaller;
const installExtension = devToolsInstaller.default;

module.exports = () => installExtension(REACT_DEVELOPER_TOOLS)
  .then((name) => console.log(`Added Extension:  ${name}`))
  .catch((err) => console.log('An error occurred: ', err))
  .then(() => installExtension(REDUX_DEVTOOLS))
  .then((name) => console.log(`Added Extension:  ${name}`))
  .catch((err) => console.log('An error occurred: ', err));
