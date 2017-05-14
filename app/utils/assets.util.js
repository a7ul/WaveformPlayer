// import {devServer} from '../../webpack.config.dev';
import path from 'path';

export const getAbsoluteFilePath = (webpackFilePath) => {
  if (process.env.NODE_ENV === 'development') {
    return  webpackFilePath;
  }
  return path.join(path.dirname(window.location.pathname), 'bundle', webpackFilePath);
};
