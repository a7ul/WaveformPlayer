import childProcess from 'child_process';
import {ProcessExecutor} from '../process.util';
import path from 'path';

childProcess.exec = jest.fn(childProcess.exec);

describe('process utility', () => {
  process.env.PATH = `${path.join(__dirname, './mockbin')}${path.delimiter}${process.env.PATH}`;
  afterAll(() => {
    jest.unmock('child_process');
  });

  it('getProcessExecutor : returns a executor and file path passed ', () => {
    const pexecutor = new ProcessExecutor('test.sh');
    expect(new ProcessExecutor()).toBeInstanceOf(ProcessExecutor);
    expect(pexecutor).toBeInstanceOf(ProcessExecutor);
    expect(pexecutor.binaryFileName).toEqual('test.sh');
    expect(typeof pexecutor.execute).toBe('function');

    const error = new Error('No executable specified');
    const executable = 'test.sh';
    return Promise.all([
      expect(new ProcessExecutor(executable).execute('-v')).resolves.toEqual('test file\n'),
      expect(childProcess.exec.mock.calls[0][0]).toBe('test.sh -v'), // to test that exec was called with 'test.sh -v'
      expect(new ProcessExecutor(null).execute('-somearg')).rejects.toEqual(error),
      new ProcessExecutor('error').execute('test').catch((err) => {
        expect(err).toBeDefined();
      })
    ]);
  });

});
