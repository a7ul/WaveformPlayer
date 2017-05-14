
import childProcess from 'child_process';
// example usage:
// getProcessExecutor('./test.sh').execute('--param1','abc');  will execute ./test.sh --param1 abc
// getProcessExecutor('./test.sh').binaryPath;  will give ./test.sh

export const getProcessExecutor = (binaryPath = null) => (
  {
    binaryPath,
    execute: (...commands) => {
      const promisified = new Promise((resolve, reject) => {
        console.log('command:', binaryPath, commands.join(' '));
        childProcess.execFile(binaryPath, commands, (error, stdout) => {
          if (error) {
            return reject(error);
          }
          resolve(stdout);
        });
      });
      return promisified;
    }
  }
);
