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
