fs = require('fs');

data = fs.readdirSync('D:/');  // get the file details from the directory
console.log('data: ',data);

console.log('This come after')