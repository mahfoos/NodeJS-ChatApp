var express = require('express');

var app = express();

app.use(express.static(__dirname ))


var messages = [
    {
        name:"Mahfoos",
        message: "hi"
    },

    {
        name:"Ahamed",
        message: "Hello"
    }
]

app.get('/messages', (req, res) => {  // call back
    res.send(messages)
} )   

app.post('/messages', (req, res) => {  // call back
    console.log(req.body)
    res.sendStatus(200)
} ) 

var server = app.listen(3000, () => {
    console.log('Server is listening on port ', server.address().port)
})

