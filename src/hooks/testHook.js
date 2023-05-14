const mysql = require('mysql2');

function Database() {
   
    let db = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'tilesos'
    });
    db.connect(function(err) {
        if (err) {
          return console.error('error: ' + err.message);
        }
      
        console.log('Connected to the MySQL server.');
      });
}
Database();