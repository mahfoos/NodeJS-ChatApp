// var _ = require('lodash');
// console.log(_.random(1,10))


// RED FROM FILES
// var fs = require('fs');
// var data = require('./data.json');

// console.log(data.name);

// fs.readFile('./data.json','utf-8', (err, data) => {
//     var data = JSON.parse(data); // getting the data parameter and convert to JSON
//     console.log(data.name);
// })


// ACCESS DIRECTORIES
// var fs = require('fs');
// fs.readdir('D:/', (err, data) => {
//     console.log(data);  // it use for put the location name of the path
// })  

// WRITE TO A FILE
var fs = require('fs');

var data = {
    name:'Mahfoos'
}

fs.writeFile('datas.json', JSON.stringify(data), (err) => {
    console.log('write finished' , err)
})