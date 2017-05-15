import path from 'path';
import os from 'os';
import result from 'lodash/result';

export const getCurrentOS = () => {
  const platformMap =  {
    'win32': 'windows',
    'linux': 'linux',
    'darwin': 'mac'
  };
  return platformMap[os.platform()];
};

export const getExecutableFilePath = (fileNameWithoutExt) => {
  const extenstionMap = {
    'windows': 'exe',
    'linux': 'bin',
    'mac': 'bin'
  };
  const currentOS = getCurrentOS();
  const pathX = (currentOS === 'windows') ? path.win32 : path.posix;
  const pathFromIndexHTMLFile = pathX.join('app', 'assets', 'binaries', currentOS, `${fileNameWithoutExt}.${extenstionMap[currentOS]}`);
  let indexHTMLFilePath = process.cwd(); // only works on dev mode or when electron is not packaged
  if (process.env.NODE_ENV === 'production') {
    indexHTMLFilePath = pathX.dirname(result(global, 'window.location.pathname'));
  }
  return pathX.join(indexHTMLFilePath, pathFromIndexHTMLFile);
};

export const getOptimalMaxProcesses = () => os.cpus().length;
