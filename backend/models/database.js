const mysql=require('mysql');
require('dotenv').config();

var con=mysql.createConnection({
  host:'remotemysql.com',
  port:3306,
  user:process.env.DB_USER,
  password:process.env.DB_PASSWORD,
  database:process.env.DB_NAME
});

module.exports=con;