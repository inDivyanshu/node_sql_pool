const mysql = require('mysql');
const pool      =    mysql.createPool({
    connectionLimit : 20,
    host     : 'host',
    user     : 'admin',
    password : 'July2020',
    database : 'test1',
    debug    :  false,
    acquireTimeout:3000,
    // charset:"utf_8_general_ci",
    connectTimeout:3000,
    flags:['flag_1'],
    port:3306,
    timeout:3000,
    bigNumberStrings:true,
    dateStrings:"DATETIME",
    waitForConnections:true,
    trace:true,
    supportBigNumbers:true,
    insecureAuth:false,
    multipleStatements:false,
    queueLimit:10,
    stringifyObjects:true,
    // typeCast:true,
    // socketPath:""
    // ssl:"",
    timezone:"local",
    // localAddress:"",
});    

const createTable=()=>{
  let query=  "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255), age INT(5))"
  pool.query(query, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
}

const addData=()=>{
    for(let i=0;i<10;i++){
        pool.query('Insert into  customers (name,address,age) values ("rakesh","delhi","32")', function(err, rows, fields) {
          if (err) throw err;
          console.log(rows); //Show 1
        });
       }
}

const testPool=()=>{
    for(let i=0;i<30;i++){
        pool.query('SELECT * from customers where age=32', function(err, rows, fields) {
          if (err) throw err;
          console.log(rows); //Show 1
        });
       }
}

// createTable();
// addData();
testPool();