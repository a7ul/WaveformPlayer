import youtubedlMac from '../lib/youtube-dl.bin';
import youtubedlWin from '../lib/youtube-dl.exe';
import {platform} from '../configs/platform.config';

export const getYoutubeDl = (currentPlatform) => {
  if (currentPlatform === platform.MAC) {
    return youtubedlMac;
  } else if (currentPlatform === platform.WIN) {
    return youtubedlWin;
  }
  return null;
};
