'use strict';

var path = require('path'),
    fs   = require('fs');

fs.readdirSync('./gulp/tasks/')
  .filter(scriptsOnly)
  .forEach(requireTask);

// filters out non .js files to prevent accidental inclusion of possible hidden files
function scriptsOnly(fileName) {
  return /(\.(js)$)/i.test(path.extname(fileName));
}

function requireTask(taskName) {
  require('./tasks/' + taskName);
}

