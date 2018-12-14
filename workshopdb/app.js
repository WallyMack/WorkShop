var express = require('express')
//var pg = require("pg");

var app=express()
var employeeRouter = require('./routes/employee');


// var config = {
//   user: 'postgres',
//   database: 'postgres', 
//   password: 'example', 
//   port: 5430, 
//   max: 10, // max number of connection can be open to database
//   idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed
// };

// var pool = new pg.Pool(config)

// function hihi (req, res, next) {
//     pool.connect(function(err,client,done) {
//        if(err){
//            console.log("not able to get connection "+ err);
//            res.status(400).send(err);
//        } 

//        client.query(`
//        select 
//          menu_code as name,
//          url,
//          parentnode,
//          group_name,
//          layer
//        from category 
//        order by layer,parentnode , sort
//         `,function(err,result) {
//            done(); // closing the connection;
//            if(err){
//                console.log(err);
//                res.status(400).send(err);
//            }
           
//            var values = [];
//            result.rows.forEach( row =>{

//             if( row.layer === 1 ){
//               if(!row.url){
//                 row.branch = []
//               }
//               values.push(row)
//             }else if( row.layer === 2 ){
//               values.forEach( value =>{
//                 if(row.parentnode === value.group_name){
//                   value.branch.push(row)
//                 }
//               })
//             }
//            })

//            console.log(JSON.stringify(values))
           

//           res.status(200).send(values);
//        });
//     });
// } 

app.use(function(req,res,next){
    res.setHeader('Access-Control-Allow-Origin', '*');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');

    // Request headers you wish to allow
    // res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    // res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
})

//app.route('/').get(hihi).post(hihi);

app.use('/emp', employeeRouter);

app.listen(3000,function(){
    console.log('Server Start')
})
