
import childProcess from 'child_process';
import noop from 'lodash/noop';
// example usage:
// getProcessExecutor('./test.sh').execute('--param1','abc');  will execute ./test.sh --param1 abc
// getProcessExecutor('./test.sh').binaryPath;  will give ./test.sh

export const getProcessExecutor = (binaryPath = null, onDataHandler = noop) => ({
  binaryPath,
  execute: (...commands) => {
    const promisified = new Promise((resolve, reject) => {
      console.log('command:', binaryPath, commands.join(' '));
      const process = childProcess.execFile(binaryPath, commands, (error, stdout) => {
        if (error) {
          return reject(error);
        }
        resolve(stdout);
      });
      process.stdout.on('data', onDataHandler);
    });
    return promisified;
  }
});
