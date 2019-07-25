const express=require('express');
const mysql=require('mysql');
const bodyParser=require('body-parser');
const cors=require('cors');
var DB=require('./models/database');

var app=express();

app.use(bodyParser.urlencoded({
  extended:false
}));
app.use(bodyParser.json());

require('dotenv').config();

//connect to DB
DB.connect(err=>{
  if(err){
    console.log(err);
  }
  else{
    console.log('Connected to DB');
  }
});

//route
app.get('/',(req,res)=>{
  DB.query('SELECT * FROM forest_cover',(err,result,fields)=>{
    if(err){
      console.log(err);
    }
    else{
      res.send({
        result:result
      });
    }
  });
});

var port = 3000;
app.listen(process.env.PORT || port, () => {
  console.log('Server started on port ' + port);
});