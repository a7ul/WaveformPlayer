const path = require('path');
const child_process = require('child_process');
const process = require('process');
const shelljs = require('shelljs');

const startServerInNewWindow = () => {
  const scriptFile = /^win/.test(process.platform) ?
    'launchPackager.bat' :
    'launchPackager.command';
  const scriptsDir = path.resolve(__dirname);
  const launchPackagerScript = path.resolve(scriptsDir, scriptFile);
  shelljs.chmod('-c', '+x', launchPackagerScript);
  const procConfig = {cwd: scriptsDir};
  const terminal = process.env.CUSTOM_TERMINAL;
  if (process.platform === 'darwin') {
    if (terminal) {
      return child_process.spawnSync('open', ['-a', terminal, launchPackagerScript], procConfig);
    }
    return child_process.spawnSync('open', [launchPackagerScript], procConfig);

  } else if (process.platform === 'linux') {
    procConfig.detached = true;
    if (terminal){
      return child_process.spawn(terminal, ['-e', 'sh ' + launchPackagerScript], procConfig);
    }
    return child_process.spawn('sh', [launchPackagerScript], procConfig);

  } else if (/^win/.test(process.platform)) {
    procConfig.detached = true;
    procConfig.stdio = 'ignore';
    return child_process.spawn('cmd.exe', ['/C', launchPackagerScript], procConfig);
  } else {
    console.log(chalk.red(`Cannot start the packager. Unknown platform ${process.platform}`));
  }
};

startServerInNewWindow();
