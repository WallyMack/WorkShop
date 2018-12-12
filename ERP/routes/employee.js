var express = require('express');
var router = express.Router();
var pg = require("pg");

var config = {
  user: 'postgres',
  database: 'postgres', 
  password: 'example', 
  port: 5430, 
  max: 10, // max number of connection can be open to database
  idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed
};
var pool = new pg.Pool(config)

/* GET home page. */
// router.get('*', function(req, res, next) {
//   console.log("employee")
//   next()
// });

router.get('/add',function(req,res,next){
  res.send('Hello World')
 })

 router.get('/get',function(req,res,next){
  //res.send(`Hello World ${req.params.seqno}`)
    pool.connect(function(err,client,done) {
      if(err){
        console.log("not able to get connection "+ err);
        res.status(400).send(err);
      } 
      var sqlQuery = `
        select * from employees;
      `
      var data = []
      client.query(sqlQuery,function(err,value) {
        done(); // closing the connection;
        if(err){
            console.log(err);
            res.status(400).send(err);
        }
        //value.push(data)
        // console.log(result.rows)
        // res.status(200).send(result.rows);
        res.status(200).send(value)
      });
    });
 });


 router.get('/get/personid/:personid',function(req,res,next){
  res.send(`Hello World ${req.params.personid}`)
 })
module.exports = router;