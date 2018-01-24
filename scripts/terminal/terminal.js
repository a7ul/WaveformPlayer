const path = require('path');
const childProcess = require('child_process');
const process = require('process');
const shelljs = require('shelljs');

const startServerInNewWindow = () => {
  const scriptFile = /^win/.test(process.platform) ?
    'startCommand.bat' :
    'startCommand.command';

  const scriptsDir = path.resolve(__dirname);
  const startCommandScript = path.resolve(scriptsDir, scriptFile);
  const procConfig = {cwd: scriptsDir};
  const terminal = process.env.CUSTOM_TERMINAL;

  shelljs.chmod('-c', '+x', startCommandScript);

  if (process.platform === 'darwin') {
    if (terminal) {
      return childProcess.spawnSync('open', ['-a', terminal, startCommandScript], procConfig);
    }
    return childProcess.spawnSync('open', [startCommandScript], procConfig);

  } else if (process.platform === 'linux') {
    procConfig.detached = true;
    if (terminal) {
      return childProcess.spawn(terminal, ['-e', 'sh ' + startCommandScript], procConfig);
    }
    return childProcess.spawn('sh', [startCommandScript], procConfig);

  } else if (/^win/.test(process.platform)) {
    procConfig.detached = true;
    procConfig.stdio = 'ignore';
    return childProcess.spawn('cmd.exe', ['/C', startCommandScript], procConfig);
  } else {
    console.log(`Cannot start the packager. Unknown platform ${process.platform}`); //eslint-disable-line
  }
};

module.exports = startServerInNewWindow;
