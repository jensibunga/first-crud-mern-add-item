var express = require('express');
var app = express();

var cors= require('cors');
var bodyParser =require('body-parser');

//mongoose connection to mongodb
var mongoose = require('mongoose');

mongoose.Promise =require('bluebird');//=> promise library 




mongoose.connect('mongodb://chdfdyufeg6e3378:24454g6yvdjfdffg@ds247058.mlab.com:47058/mern_tutorial')

//mongoose.connect('mongodb://localhost:27017/mernTutorial')
.then(function(){
  console.log('Connected to the database');
})
.catch(function(error){
  console.error('App starting error: ', err.stack);
  process.exit(1);//when u start the app 
});



app.use(express.static('public'));
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
var ItemRouter = require('./src/routes/ItemRouter');
app.use('/items', ItemRouter);

var port = process.env.PORT || 8080 ;//port of the node express
app.listen(port, function(){
  console.log('Server is running on http://localhost:', port);
  
});

