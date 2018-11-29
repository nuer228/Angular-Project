var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

var mongoose = require('mongoose');

// Database Connection
var mongoDB = 'mongodb://nuer:kristaps123@ds211774.mlab.com:11774/nuer';
mongoose.connect(mongoDB);

var Schema = mongoose.Schema;
var sendSchema = new Schema({
    country: String,
    capital: String,
    population: String
})
var SendModel = mongoose.model('send', sendSchema);


//Here we are configuring express to use body-parser as middle-ware. 
app.use(bodyParser.urlencoded({ extended: false })); 
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept");
    next();
    });
    
app.post('/name', function(req, res){
    res.send("Hello you sent " +
    req.body.firstname + " " +
    req.body.lastname);
})

app.get('/', function (req, res) {
   res.send('Hello from Express');
})

app.post('/api/send', function(req, res){
    console.log("send successful");
    console.log(req.body.country);
    console.log(req.body.capital);
    console.log(req.body.population);

    SendModel.create({
        country: req.body.country,
        capital: req.body.capital,
        population: req.body.population
    });
    res.send('Item added');


})

app.get('/api/send', function(req, res){
    SendModel.find(function(err, data){
        res.json(data);
    });
})

app.get('/api/send/:id', function(req, res){
    console.log("Read send " +req.params.id);


    SendModel.findById(req.params.id,
        function (err, data) {
            res.json(data);
        });
})

app.put('/api/send/:id', function(req, res){
    console.log("Update Send" +req.params.id);
    console.log(req.body.country);
    console.log(req.body.capital);
    console.log(req.body.population);

    SendModel.findByIdAndUpdate(req.params.id, req.body, 
        function(err, data){
            res.send(data);
        })
})

app.delete('/api/send/:id', function(req, res){
    console.log(req.params.id);

    SendModel.deleteOne({_id:req.params.id},
    function(err, data)
    {
        if(err)
            res.send(err);
        res.send(data);
    })
})


var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})