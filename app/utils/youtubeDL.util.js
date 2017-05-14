import youtubedlMacPath from '../assets/binaries/youtube-dl.bin';
import youtubedlWinPath from '../assets/binaries/youtube-dl.exe';
import {getExecutableRealFilePath, getCurrentOS} from './helper.util';
import {executeProcess} from './process.util';

export const getYoutubeDl = () => {
  const ytdlBinaryMap = {
    'MAC': getExecutableRealFilePath(youtubedlMacPath),
    'WINDOWS': getExecutableRealFilePath(youtubedlWinPath),
    'LINUX': getExecutableRealFilePath(youtubedlMacPath)
  };
  const selectedYTDL = ytdlBinaryMap[getCurrentOS()] || null;
  return selectedYTDL;
};

export const getYTDLVersion = () => executeProcess(getYoutubeDl(), ['--version']);
