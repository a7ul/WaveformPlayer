/* eslint-disable max-len */
import { parseVideoDownloadMetadata } from '../util';

describe('Parser: YoutubeDL downloadm metadata', () => {
  it('parser: failure - invalid url', () => {
    const message = `
    [generic] www.yo234324: Requesting header
    WARNING: Could not send HEAD request to https://www.yo234324.com: <urlopen error [Errno 8] nodename nor servname provided, or not known>
    [generic] www.yo234324: Downloading webpage
    ERROR: Unable to download webpage: <urlopen error [Errno 8] nodename nor servname provided, or not known> (caused by URLError(gaierror(8, 'nodename nor servname provided, or not known'),))
    `;
    expect(() => parseVideoDownloadMetadata(message)).toThrow(/Unable to download webpage/);
  });
  it('parser: failure - unsupported url', () => {
    const message = `
    [generic] www.google: Requesting header
    [redirect] Following redirect to https://www.google.co.in/?gfe_rd=cr&dcr=0&ei=EP2nWpDLBaSvX9TkmvAO
    [generic] ?gfe_rd=cr&dcr=0&ei=EP2nWpDLBaSvX9TkmvAO: Requesting header
    WARNING: Falling back on generic information extractor.
    [generic] ?gfe_rd=cr&dcr=0&ei=EP2nWpDLBaSvX9TkmvAO: Downloading webpage
    [generic] ?gfe_rd=cr&dcr=0&ei=EP2nWpDLBaSvX9TkmvAO: Extracting information
    ERROR: Unsupported URL: https://www.google.co.in/?gfe_rd=cr&dcr=0&ei=EP2nWpDLBaSvX9TkmvAO
    `;
    expect(() => parseVideoDownloadMetadata(message)).toThrow(/Unsupported URL/);
  });
  it('parser: failure - invalid youtube url', () => {
    const message = `
    [youtube] 343IIIHwuso: Downloading webpage
    [youtube] 343IIIHwuso: Downloading video info webpage
    ERROR: 343IIIHwuso: YouTube said: Invalid parameters.
    `;
    expect(() => parseVideoDownloadMetadata(message)).toThrow(/YouTube said: Invalid/);
  });
  it('parser: success - valid youtube url', () => {
    const message = `
    [youtube] IIIHwusog8k: Downloading webpage
    [youtube] IIIHwusog8k: Downloading video info webpage
    [youtube] IIIHwusog8k: Extracting video information
    [info] Available formats for IIIHwusog8k:
    format code  extension  resolution note
    249          webm       audio only DASH audio   57k , opus @ 50k, 1.57MiB
    140          m4a        audio only DASH audio  128k , m4a_dash container, mp4a.40.2@128k, 3.83MiB
    278          webm       256x144    144p  109k , webm container, vp9, 24fps, video only, 2.83MiB
    133          mp4        426x240    240p  307k , avc1.4d4015, 24fps, video only, 6.76MiB
    `;
    // 17           3gp        176x144    small , mp4v.20.3, mp4a.40.2@ 24k
    // 36           3gp        320x180    small , mp4v.20.3, mp4a.40.2
    // 22           mp4        1280x720   hd720 , avc1.64001F, mp4a.40.2@192k (best)
    expect(parseVideoDownloadMetadata(message)).toEqual({
      id: 'IIIHwusog8k',
      formats: [
        {
          code: 249,
          extension: 'webm',
          note: 'audio only',
          codec: 'opus @ 50k',
          resolution: '57k',
          size: '1.57MiB'
        },
        {
          code: 140,
          extension: 'm4a',
          note: 'audio only',
          codec: 'mp4a.40.2@128k',
          resolution: '128k',
          size: '3.83MiB'
        },
        {
          code: 278,
          extension: 'webm',
          note: 'video only',
          codec: 'vp9',
          resolution: '256x144',
          size: '2.83MiB'
        },
        {
          code: 133,
          extension: 'mp4',
          note: 'video only',
          codec: 'avc1.4d4015',
          resolution: '426x240',
          size: '6.76MiB'
        }
        // {
        //   code: 17,
        //   extension: '3gp',
        //   note: 'both',
        //   codec: 'mp4v.20.3',
        //   resolution: '176x144',
        //   size: 'NA'
        // },
        // {
        //   code: 36,
        //   extension: '3gp',
        //   note: 'both',
        //   codec: 'mp4v.20.3',
        //   resolution: '320x180',
        //   size: 'NA'
        // },
        // {
        //   code: 22,
        //   extension: 'mp4',
        //   note: 'both',
        //   codec: 'avc1.64001F',
        //   resolution: '1280x720',
        //   size: 'NA'
        // }
      ]
    });
  });
});

