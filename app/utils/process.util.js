import youtubedlMacPath from '../assets/binaries/youtube-dl.bin';
import youtubedlWinPath from '../assets/binaries/youtube-dl.exe';
import {platform} from '../configs/platform.config';
import childProcess from 'child_process';
import path from 'path';

export const getExecutableRealFilePath = (webpackFilePath) => {
  if (process.env.NODE_ENV === 'development') {
    return  webpackFilePath;
  }
  return path.join(path.dirname(window.location.pathname), 'bundle', webpackFilePath); // hack to run executables from bundled location
};

export const getYoutubeDl = (currentPlatform) => {
  const ytdlBinaryMap = {
    [platform.MAC]: getExecutableRealFilePath(youtubedlMacPath),
    [platform.WIN]: getExecutableRealFilePath(youtubedlWinPath)
  };
  const selectedYTDL = ytdlBinaryMap[currentPlatform] || null;
  console.log('Using youtube-dl at: ', selectedYTDL);
  return selectedYTDL;
};

const executeYoutubeDl = (commandsarray) => new Promise((resolve, reject) => {
  if (!(commandsarray instanceof Array)) {
    return reject('commands not an array');
  }
  const youtubeDLPath = getYoutubeDl(platform.MAC);
  console.log('command: youtube-dl', commandsarray.join(' '));
  childProcess.execFile(youtubeDLPath, commandsarray, (error, stdout, stderr) => {
    resolve({
      error,
      stdout,
      stderr
    });
  });
});

export const executeYoutubeDlVersion = () => executeYoutubeDl(['--version']);
