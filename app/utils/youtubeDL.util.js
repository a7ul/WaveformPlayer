import youtubeDLMacPath from '../assets/binaries/youtube-dl.bin'; // this only gets url of file and not the binary
import youtubeDLWinPath from '../assets/binaries/youtube-dl.exe';
import {getExecutableRealFilePath, getCurrentOS} from './helper.util';
import {getProcessExecutor} from './process.util';

export const getYoutubeDL = () => {
  const ytdlBinaryMap = {
    'MAC': getExecutableRealFilePath(youtubeDLMacPath),
    'WINDOWS': getExecutableRealFilePath(youtubeDLWinPath),
    'LINUX': getExecutableRealFilePath(youtubeDLMacPath)
  };
  const selectedYTDL = ytdlBinaryMap[getCurrentOS()] || null;
  return getProcessExecutor(selectedYTDL);
};

export const getYTDLVersion = () => getYoutubeDL().execute('--version');
