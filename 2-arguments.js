#!/usr/bin/node
// Include process module
const process = require('process');

const arr = process.argv;
const len = arr.length;

if (len <= 2) {
  console.log('No argument');
} else if (len === 3) {
  console.log('Argument found');
} else {
  console.log('Arguments found');
}
