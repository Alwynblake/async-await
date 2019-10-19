'use strict';

jest.mock('fs');

const fileReader = require('../lib/file-reader');

describe('Testing file reader module', () => {
  it('Throws err when bad file path is given', (done) => {
    let file = `${__dirname}../data/bad.txt`;
    fileReader(file, (err, data) => {
      expect(err).toBeDefined();
      expect(data).not.toBeDefined();
      expect(err).toEqual('Invalid File');
      done();
    });
  });
});


test('the string list has my name in it', () => {
  expect(readerPromise).toContain('my name is Alistair, I promise!');
});
