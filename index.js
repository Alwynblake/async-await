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
  .then(() => usePromise.read(filePath).then(content => { console.log(content); }))
  .catch(e => {
    throw e;
  });

// 'use strict';
//
// const fs = require('fs');
// const fileReader = require('./lib/reader.js');
//
// let file = `${__dirname}/data/file.txt`;
//
// // A simple error first callback that regurgitates our file contents
// let showFileContents = (err,data) => {
//   if(err) { throw err; }
//   console.log(data);
// };
//
// // Use our custom file reader instead of normal fs, so that we can change our interface to it ...
// // Invoke our file reader.  Note that the "reader" module is expected to simply export a function, not an object
// // We should be able to call it directly with a file and any callback we like.
//
// fileReader(file, showFileContents);
//
// // Using our custom reader as a promise ...
// // fileReader( file )
// //   .then( contents => showFileContents(null, contents ) )
// //   .catch( showFileContents );

