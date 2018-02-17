import os from 'os';
import path from 'path';
import { execFile } from './common';
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

function getBinaryExecutor(binaryPath) {
  return (commands, onProgress) => execFile(binaryPath, commands, onProgress);
}

export const getBinaries = () => {
  const currentOS = getCurrentOS();
  return {
    youtubeDL: getBinaryExecutor(path.resolve(__dirname, `../assets/binaries/${BINARY_DIR[currentOS]}/youtube-dl${BINARY_EXT[currentOS]}`)),
    ffmpeg: getBinaryExecutor(path.resolve(__dirname, `../assets/binaries/${BINARY_DIR[currentOS]}/ffmpeg${BINARY_EXT[currentOS]}`))
  };
};

