// 'use strict';
//
// const fs = require('fs');
// const util = require('util');
//
// const reader = (file, cb) => {
//   fs.readFile(file, (err,data) => {
//     if (err) {
//       cb(err);
//     } else {
//       cb(null, data.toString());
//     }
//   });
// };
//
// const readFilePromise = util.promisify(fs.readFile);
// const readerPromise = (file) => {
//   return readFilePromise(file)
//     .then(data => data.toString())
//     .catch(error => error);
// };
//
// module.exports = reader;
//
