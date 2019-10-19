'use strict';

const fs = require('fs');

// create two file system methods: read/ write
// if there is an error, pass it off to the callback function
/**
 * @param {string} filePath - the relative path to the file
 * @param {function} cb - error first callback function to handle errors
 */
exports.read = (filePath, cb) => {
  fs.readFile(filePath, (err, data) => {
    if (err) {
      cb(err);
    } else {
      // try catch block
      try {
        cb(null, JSON.parse(data.toString()));
      } catch (e) {
        cb(e);
      }
    }
  });
};

/**
 * @params {string} file - the location the write method will write to.
 * @params {Object} text - a text info
 * @params  {function}cb - our callback function to write data
 */

exports.write = (file, text, cb) => {
  const bufferText = JSON.stringify(text) || text;
  const buffer = Buffer.from(bufferText);
  fs.writeFile(file, buffer, cb);
};