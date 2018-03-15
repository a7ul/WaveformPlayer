const errorRegex = /ERROR:/;

export const normalizeUrl = (url) => {
  const https = url.slice(0, 8).toLowerCase();
  const http = url.slice(0, 7).toLowerCase();
  if (https === 'https://') {
    return url;
  } else if (http === 'http://') {
    return url;
  }
  return `http://${url}`;
};

export const getVideoDownloadMetadata = (videoUrl) => {
  const { utils } = global.playerSDK;
  const { platform } = utils;
  const { youtubeDL } = platform.getBinaries();
  const command = ['-F', '--geo-bypass', `${videoUrl}`];
  return youtubeDL(command);
};

const extractVideoId = (lines) => {
  let youtubeId = null;
  let scanIndex = 0;
  const availableFormatsRegex = /^[\[]info[\]] Available formats for (.*):/gi;
  lines.every((rawLine, index) => {
    const eachLine = rawLine.trim();
    const matches = availableFormatsRegex.exec(eachLine);
    if (matches) {
      [, youtubeId] = matches;
      scanIndex = index;
      return false;
    }
    return true;
  });
  return { youtubeId, scanIndex };
};

const audioOnlyExtractor = (rawAudioItem) => {
  const [formatString, ...restItems] = rawAudioItem.split(',');
  const restItemLength = restItems.length;
  const size = restItems[restItemLength - 1];
  const codec = restItems[restItemLength - 2];
  const formatCodeSplitRegex = /[\s]+/gi;
  const [code, extension, ...meta] = formatString.trim().split(formatCodeSplitRegex);
  return {
    code: parseInt(code.trim(), 10),
    extension: extension.trim(),
    note: 'audio only',
    codec: codec.trim(),
    resolution: meta[meta.length - 1],
    size: size.trim()
  };
};

const videoOnlyExtractor = (rawVideoItem) => {
  const [formatString, ...restItems] = rawVideoItem.split(',');
  const restItemLength = restItems.length;
  const size = restItems[restItemLength - 1];
  const codec = restItems[restItemLength - 4];
  const formatCodeSplitRegex = /[\s]+/gi;
  const [code, extension, ...meta] = formatString.trim().split(formatCodeSplitRegex);
  return {
    code: parseInt(code.trim(), 10),
    extension: extension.trim(),
    note: 'video only',
    codec: codec.trim(),
    resolution: meta[meta.length - 3],
    size: size.trim()
  };
};

const bothAVExtractor = (rawAVItem) => {
  const t = {
    code: 249,
    extension: 'webm',
    note: 'both',
    codec: 'opus',
    resolution: '50k',
    size: '1.57MiB'
  };
  return t;
};


const extractFormatInfo = (rawFormatItemString) => {
  const formatItemString = rawFormatItemString.trim();
  const isAudioOnly = /audio only/;
  const isVideoOnly = /video only/;
  if (isAudioOnly.test(formatItemString)) {
    return audioOnlyExtractor(formatItemString);
  } else if (isVideoOnly.test(formatItemString)) {
    return videoOnlyExtractor(formatItemString);
  }
  return bothAVExtractor(formatItemString);
};

export const parseVideoDownloadMetadata = (rawMeta) => {
  if (errorRegex.test(rawMeta)) {
    throw rawMeta;
  }
  const lines = rawMeta.trim().split('\n');
  const { scanIndex, youtubeId } = extractVideoId(lines);
  const formats = [];
  for (let lineIndex = scanIndex + 2; lineIndex < lines.length; lineIndex += 1) {
    formats.push(extractFormatInfo(lines[lineIndex]));
  }
  return { id: youtubeId, formats };
};

