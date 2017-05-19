import childProcess from 'child_process';
import noop from 'lodash/noop';
// example usage:
// new ProcessExecutor('test.sh').execute('--param1','abc');  will execute ./test.sh --param1 abc
// new ProcessExecutor('test.sh').binaryFileName;  will give ./test.sh
// new ProcessExecutor('test.sh',console.log).execute('--p','abc');  will console.log all outputs from ./test.sh --p abc

export class ProcessExecutor {
  constructor (binaryFileName = null, onDataHandler = noop) {
    this.binaryFileName = binaryFileName;
    this.onDataHandler = onDataHandler; // You can pass this to attach a on Data listener.
    this.process = null; // This will give u a handle on the process once you call execute
  }
  execute (...commands) {
    const vm = this;
    return new Promise((resolve, reject) => {
      if (!vm.binaryFileName) {
        reject(new Error('No executable specified'));
      }
      const completeCommand = [vm.binaryFileName, ...commands].join(' ');
      console.log('command:', completeCommand);
      vm.process = childProcess.exec(completeCommand, (error, stdout) => {
        if (error) {
          return reject(error);
        }
        resolve(stdout);
      });
      vm.process.stdout.on('data', vm.onDataHandler);
    });
  }
}
