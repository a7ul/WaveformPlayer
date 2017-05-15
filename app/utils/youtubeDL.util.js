import {getExecutableFilePath} from './helper.util';
import {ProcessExecutor} from './process.util';

export const getYoutubeDL = (onDataHandler) => {
  const ytdlBinaryFile = getExecutableFilePath('youtube-dl');
  return new ProcessExecutor(ytdlBinaryFile, onDataHandler);
};

export const getYTDLVersion = () => getYoutubeDL().execute('--version');

export const getVideoMetaData = (url) => getYoutubeDL().execute('--skip-download', '--print-json', url);
