import youtubeDLMacPath from '../assets/binaries/youtube-dl.bin'; // this only gets url of file and not the binary
import youtubeDLWinPath from '../assets/binaries/youtube-dl.exe';
import {getExecutableRealFilePath, getCurrentOS} from './helper.util';
import {getProcessExecutor} from './process.util';
import * as parser from './parser.util';

export const getYoutubeDL = (onDataHandler) => {
  const ytdlBinaryMap = {
    'MAC': getExecutableRealFilePath(youtubeDLMacPath),
    'WINDOWS': getExecutableRealFilePath(youtubeDLWinPath),
    'LINUX': getExecutableRealFilePath(youtubeDLMacPath)
  };
  return getProcessExecutor(ytdlBinaryMap[getCurrentOS()], onDataHandler);
};

export const getYTDLVersion = () => getYoutubeDL().execute('--version');

export const downLoadVideo = (url, onDataHandler) => getYoutubeDL(onDataHandler).execute(url);

export const getVideoMetaData = (url) => getYoutubeDL().execute('--skip-download', '--print-json', url).then(parser.parseVideoMetatData);
