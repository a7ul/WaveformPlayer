import fs from 'fs';
import path from 'path';
import { promisify, readFileToArrayBuffer } from '../../../app/utils/common';

const checkArrayBufferEqual = (buf1, buf2) => {
  if (buf1.byteLength !== buf2.byteLength) return false;
  const dv1 = new Int8Array(buf1);
  const dv2 = new Int8Array(buf2);
  for (let i = 0; i !== buf1.byteLength; i += 1) {
    if (dv1[i] !== dv2[i]) return false;
  }
  return true;
};

describe('Common Utility', () => {
  describe('Promisify: Promisifies the given function', () => {
    it('returns a function that resolves a promise on success', () => {
      const funcWithCallbackSuccess = (arg1, cb) => {
        cb(null, arg1);
      };
      const promisified = promisify(funcWithCallbackSuccess);
      return expect(promisified('firstarg')).resolves.toEqual('firstarg');
    });
    it('should take any amount of args', () => {
      const funcWithCallbackSuccess = (arg1, arg2, arg3, arg4, cb) => {
        cb(null, arg1 + arg2 + arg3 + arg4);
      };
      const promisified = promisify(funcWithCallbackSuccess);
      return expect(promisified('firstarg', 'secondarg', 'thirdarg', 'fourtharg')).resolves.toEqual('firstargsecondargthirdargfourtharg');
    });
    it('returns a function that rejects a promise on error', () => {
      const funcWithCallbackError = (arg1, cb) => {
        cb('ERROR');
      };
      const promisified = promisify(funcWithCallbackError);
      return expect(promisified('firstarg')).rejects.toEqual('ERROR');
    });
  });

  describe('readFileToArrayBuffer: reads a given file to array buffer', () => {
    it('returns a function that resolves a promise on success', (done) => {
      const testFile = path.resolve(__dirname, './data/text.txt');
      fs.readFile(testFile, (err, actualData) => {
        const expectedBuffer = actualData.buffer;
        readFileToArrayBuffer(testFile).then((data) => {
          expect(checkArrayBufferEqual(data, expectedBuffer)).toBe(true);
          done();
        });
      });
    });
  });
});
