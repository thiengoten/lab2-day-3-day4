const fs = require('fs');
const data = fs.readFileSync('./lorem.txt');
console.log(data.toString());
