import os from 'os';

export const currentOS = String(os.type()).toUpperCase(); // one of LINUX, DARWIN, WINDOWS_NT

const BINARY_DIR = {
  LINUX: 'linux',
  DARWIN: 'mac',
  WINDOWS_NT: 'windows'
};

const BINARY_EXT = {
  LINUX: '.bin',
  DARWIN: '.bin',
  WINDOWS_NT: '.exe'
};

export const BINARIES = {
  YTDL: require(`../assets/binaries/${BINARY_DIR[currentOS]}/youtube-dl${BINARY_EXT[currentOS]}`),
  FFMPEG: require(`../assets/binaries/${BINARY_DIR[currentOS]}/ffmpeg${BINARY_EXT[currentOS]}`)
};
