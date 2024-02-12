const fs = require('fs-extra');

fs.ensureDirSync("one");

fs.ensureFileSync('one/file.txt');

fs.ensureDirSync('two');

fs.moveSync('one/file.txt', 'two/file.txt');

fs.ensureDirSync('three');

fs.copySync('two/file.txt', 'three/file.txt');

fs.removeSync('two/file.txt');
fs.removeSync('three/file.txt');

fs.removeSync('one');
fs.removeSync('two');
fs.removeSync('three');