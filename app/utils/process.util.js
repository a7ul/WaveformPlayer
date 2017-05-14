
import childProcess from 'child_process';

export const executeProcess = (executableFilePath, commandsarray) => {
  const p = new Promise((resolve, reject) => {
    if (!(commandsarray instanceof Array)) {
      return reject('commands not an array');
    }
    console.log('command:', executableFilePath, commandsarray.join(' '));
    childProcess.execFile(executableFilePath, commandsarray, (error, stdout, stderr) => {
      resolve({
        error,
        stdout,
        stderr
      });
    });
  });
  return p;
};
