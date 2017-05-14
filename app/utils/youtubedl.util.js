import youtubedlMac from '../assets/binaries/youtube-dl.bin';
import youtubedlWin from '../assets/binaries/youtube-dl.exe';
import {platform} from '../configs/platform.config';
import childProcess from 'child_process';
import {getAbsoluteFilePath} from './assets.util';

import path from 'path';

export const getYoutubeDl = (currentPlatform) => {
  if (currentPlatform === platform.MAC) {
    return getAbsoluteFilePath(youtubedlMac);
  } else if (currentPlatform === platform.WIN) {
    return getAbsoluteFilePath(youtubedlWin);
  }
  return null;
};

const executeYoutubeDl = (commandsarray) => new Promise((resolve, reject) => {
  if (!(commandsarray instanceof Array)) {
    return reject('commands not an array');
  }
  const youtubeDLPath = getYoutubeDl(platform.MAC);
  console.log('command:', path.resolve(youtubeDLPath), commandsarray.join(' '));
  childProcess.execFile(youtubeDLPath, commandsarray, (error, stdout, stderr) => {
    resolve({
      error,
      stdout,
      stderr
    });
  });
});

export const executeYoutubeDlVersion = () => executeYoutubeDl(['--version']);
