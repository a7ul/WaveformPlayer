import path from 'path';
import os from 'os';
import result from 'lodash/result';

export const getExecutableRealFilePath = (webpackFilePath) => {
  if (process.env.NODE_ENV === 'development') {
    return  webpackFilePath;
  }
  let getDirname = path.dirname;
  if (getCurrentOS() === 'WINDOWS') {
    getDirname = path.win32.dirname;
  }
  return path.join(getDirname(result(global, 'window.location.pathname')), 'bundle', webpackFilePath); // hack to run executables from bundled location
};

export const getCurrentOS = () => {
  const platformMap =  {
    'win32': 'WINDOWS',
    'linux': 'LINUX',
    'darwin': 'MAC'
  };
  return platformMap[os.platform()];
};

export const getOptimalMaxProcesses = () => os.cpus().length;
