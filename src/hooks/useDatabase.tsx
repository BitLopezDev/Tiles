// import * as React from 'react';
const mysql = require('mysql');
interface queries {

}
function useDatabase() {
   
   
var db = mysql.createConnection({
    host: "localhost",
    user: process.env.DB_USER,
    password: process.env.DB_USR_PSWD,
    database: "tilesos"
  });
  db.connect(function(err : Error) {
    if (err) throw err;
    db.query("SELECT * FROM customers", function (err : Error, result :string, fields : string[]) {
      if (err) throw err;
      console.log(result);
    });
  });
}


export {useDatabase};