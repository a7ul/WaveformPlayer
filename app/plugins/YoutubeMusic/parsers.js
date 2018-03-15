export const extractVideoId = (lines) => {
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

export const audioOnlyExtractor = (rawAudioItem) => {
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

export const videoOnlyExtractor = (rawVideoItem) => {
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

export const bothAVExtractor = (rawAVItem) => {
  const [formatString, ...restItems] = rawAVItem.split(',');
  const restItemLength = restItems.length;
  const codec = restItems[restItemLength - 2];
  const formatCodeSplitRegex = /[\s]+/gi;
  const [code, extension, ...meta] = formatString.trim().split(formatCodeSplitRegex);
  return {
    code: parseInt(code.trim(), 10),
    extension: extension.trim(),
    note: 'both av',
    codec: codec.trim(),
    resolution: meta[meta.length - 2],
    size: null
  };
};


export const extractFormatInfo = (rawFormatItemString) => {
  const formatItemString = String(rawFormatItemString).trim();
  const isAudioOnly = /audio only/;
  const isVideoOnly = /video only/;
  let error = null;
  let formatted = {};
  try {
    if (isAudioOnly.test(formatItemString)) {
      formatted = { ...audioOnlyExtractor(formatItemString) };
    } else if (isVideoOnly.test(formatItemString)) {
      formatted = { ...videoOnlyExtractor(formatItemString) };
    } else {
      formatted = { ...bothAVExtractor(formatItemString) };
    }
  } catch (err) {
    error = err;
  }
  return { ...formatted, error };
};

