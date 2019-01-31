
var express= require( 'express'    );

var bodyParser=require('body-parser')
var {mongoose} = require('./db/mongoose')

var{todo} =require('./models/todo');
var{User}= require('./models/users');


var app = express();




app.listen(3000, ()=>{
    console.log('Started on port 3000')
});





 




