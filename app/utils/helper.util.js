import path from 'path';
import os from 'os';

export const getExecutableRealFilePath = (webpackFilePath) => {
  if (process.env.NODE_ENV === 'development') {
    return  webpackFilePath;
  }
  return path.join(path.dirname(window.location.pathname), 'bundle', webpackFilePath); // hack to run executables from bundled location
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
