let fs = require('fs');
let path = require('path');

let data = fs.readFileSync(path.join(__dirname, 'demo.txt'), 'utf-8');
fs.writeFileSync(path.join(__dirname, 'test.txt'), data);

