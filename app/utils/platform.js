import os from 'os';
import path from 'path';

// should return one of LINUX, DARWIN, WINDOWS_NT
export const getCurrentOS = () => String(os.type()).toUpperCase();

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

export const getBinaries = () => {
  const currentOS = getCurrentOS();
  const binaries = {
    YTDL: path.resolve(__dirname, `../assets/binaries/${BINARY_DIR[currentOS]}/youtube-dl${BINARY_EXT[currentOS]}`),
    FFMPEG: path.resolve(__dirname, `../assets/binaries/${BINARY_DIR[currentOS]}/ffmpeg${BINARY_EXT[currentOS]}`)
  };
  return binaries;
};
