import {getBinaryFileName} from './helper.util';
import {ProcessExecutor} from './process.util';

export const getYoutubeDL = (onDataHandler) => {
  const ytdlBinary = getBinaryFileName('youtube-dl');
  return new ProcessExecutor(ytdlBinary, onDataHandler);
};

export const getYTDLVersion = () => getYoutubeDL().execute('--version');

export const getVideoMetaData = (url) => getYoutubeDL().execute('--skip-download', '--print-json', url);
