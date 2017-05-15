
import childProcess from 'child_process';
import noop from 'lodash/noop';
// example usage:
// new ProcessExecutor('./test.sh').execute('--param1','abc');  will execute ./test.sh --param1 abc
// new ProcessExecutor('./test.sh').binaryPath;  will give ./test.sh
// new ProcessExecutor('./test.sh',console.log).execute('--p','abc');  will console.log all outputs from ./test.sh --p abc

export class ProcessExecutor {
  constructor (binaryPath = null, onDataHandler = noop) {
    this.binaryPath = binaryPath;
    this.onDataHandler = onDataHandler;
  }
  execute (...commands) {
    const vm = this;
    return new Promise((resolve, reject) => {
      console.log('command:', vm.binaryPath, commands.join(' '));
      const cprocess = childProcess.execFile(vm.binaryPath, commands, (error, stdout) => {
        if (error) {
          return reject(error);
        }
        resolve(stdout);
      });
      cprocess.stdout.on('data', vm.onDataHandler);
    });
  }
}
