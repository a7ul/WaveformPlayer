import { remote } from 'electron';
import isEqual from 'lodash/isEqual';
import childProcess from 'child_process';
import logger from './logger';

const fs = remote.require('fs');

export const noop = () => {};

export function promisify(functionWithCallback) {
  return (...args) => new Promise((resolve, reject) => {
    functionWithCallback(...args, (err, data) => (err ? reject(err) : resolve(data)));
  });
}

export const readFileToArrayBuffer = (absolutePath) => {
  const readFile = promisify(fs.readFile);
  return readFile(absolutePath).then((data) => data.buffer);
};

export const execFile = (binaryFilePath, commands, onProgress = noop) => {
  logger.info(`${binaryFilePath} ${commands}`);
  return new Promise((resolve, reject) => {
    const cprocess = childProcess.execFile(
      binaryFilePath, [...commands], { windowsHide: true },
      (error, stdout) => {
        if (error) {
          return reject(error);
        }
        return resolve(stdout);
      }
    );
    cprocess.stdout.on('data', (data) => {
      onProgress(data);
    });
  });
};

export const checkIfSerializable = (jsonObject) => {
  const cleanedJson = JSON.parse(JSON.stringify(jsonObject));
  return isEqual(cleanedJson, jsonObject);
};

