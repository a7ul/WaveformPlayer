import { extractVideoId, extractFormatInfo } from './parsers';

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

export const parseVideoDownloadMetadata = (rawMeta) => {
  if (errorRegex.test(rawMeta)) {
    throw rawMeta;
  }
  const lines = rawMeta.trim().split('\n');
  const { scanIndex, youtubeId } = extractVideoId(lines);
  const formats = [];
  for (let lineIndex = scanIndex + 2; lineIndex < lines.length; lineIndex += 1) {
    const lineText = String(lines[lineIndex]).trim();
    const fallbackCode = parseInt(lineText, 10);
    formats.push({ code: fallbackCode, ...extractFormatInfo(lineText), fallback: lineText });
  }
  return { id: youtubeId, formats };
};

