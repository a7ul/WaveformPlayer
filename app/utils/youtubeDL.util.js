import {getExecutableFilePath} from './helper.util';
import {ProcessExecutor} from './process.util';
import * as parser from './parser.util';

export const getYoutubeDL = (onDataHandler) => {
  const ytdlBinaryFile = getExecutableFilePath('youtube-dl');
  return new ProcessExecutor(ytdlBinaryFile, onDataHandler);
};

export const getYTDLVersion = () => getYoutubeDL().execute('--version');

export const downLoadVideo = (url, onDataHandler) => getYoutubeDL(onDataHandler).execute(url);

export const getVideoMetaData = (url) => getYoutubeDL().execute('--skip-download', '--print-json', url).then(parser.parseVideoMetatData);
