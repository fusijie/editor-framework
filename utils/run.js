'use strict';

var spawn = require('child_process').spawn;

var args = process.argv.slice(2);
var cmdStr = '';
var optArr = [];

if ( process.platform === 'darwin' ) {
  cmdStr = 'bin/electron/Electron.app/Contents/MacOS/Electron';
  optArr = ['./'].concat(args);
} else if (process.platform === 'win32') {
  cmdStr = 'bin\\electron\\electron.exe';
  optArr = ['.\\'].concat(args);
} else {
  cmdStr = 'bin/electron/electron';
  optArr = ['./'].concat(args);
}

spawn(cmdStr, optArr, {
  stdio: 'inherit'
});
