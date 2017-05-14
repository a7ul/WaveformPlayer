import youtubedlMacPath from '../assets/binaries/youtube-dl.bin';
import youtubedlWinPath from '../assets/binaries/youtube-dl.exe';
import childProcess from 'child_process';
import {getExecutableRealFilePath, getCurrentOS} from './helper.util';

export const getYoutubeDl = (currentPlatform) => {
  const ytdlBinaryMap = {
    'MAC': getExecutableRealFilePath(youtubedlMacPath),
    'WINDOWS': getExecutableRealFilePath(youtubedlWinPath),
    'LINUX': getExecutableRealFilePath(youtubedlMacPath)
  };
  const selectedYTDL = ytdlBinaryMap[currentPlatform] || null;
  console.log('Using youtube-dl at: ', selectedYTDL);
  return selectedYTDL;
};

const executeYoutubeDl = (commandsarray) => new Promise((resolve, reject) => {
  if (!(commandsarray instanceof Array)) {
    return reject('commands not an array');
  }
  console.log('command: youtube-dl', commandsarray.join(' '));
  childProcess.execFile(getYoutubeDl(getCurrentOS()), commandsarray, (error, stdout, stderr) => {
    resolve({
      error,
      stdout,
      stderr
    });
  });
});

export const executeYoutubeDlVersion = () => executeYoutubeDl(['--version']);
