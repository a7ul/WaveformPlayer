import {getYoutubeDl} from '../youtubedl.util';
import {platform} from '../../configs/platform.config';
import youtubeDlMac from '../../lib/youtube-dl.bin';
import youtubeDlWin from '../../lib/youtube-dl.exe';

describe('youtubedl utility', () => {
  it('getYoutubeDl : loads correct youtube-dl according to the platform', () => {
    expect(getYoutubeDl(platform.MAC)).toBe(youtubeDlMac);
    expect(getYoutubeDl(platform.WIN)).toBe(youtubeDlWin);
    expect(getYoutubeDl()).toBe(null);
  });
});
