'use strict';
//bring in both files

const filePath = process.argv[2];

const useCallback = require('./lib/file-reader-callbacks');
const usePromise = require('./lib/file-reader-promise');
// const useAync = require('./lib/file-reader-async');

useCallback.read(filePath, (err, data) => {
  if (err) {
    console.error(err);
  } else {
    data.hair = 'Changed to rainbow colored';
    useCallback.write(filePath, data, (err) => {
      if (err) {
        console.error(err);
      } else {
        useCallback.read(filePath, (err, newData) => {
          console.log(newData);
        });
      }
    });
  }
});

usePromise.read(filePath)
  .then(data => {
    data.firstName = 'my name is Alistair, I promise!';
    return data;
  })
  .then(obj => usePromise.write(filePath, obj))
  .then(() => usePromise.read(filePath)
    .then(content => { console.log(content); }))
  .catch(e => {
    throw e;
  });


