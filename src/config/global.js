//My Sql Library
const mysql = require('mysql');

var mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'school'
});

mysqlConnection.connect((err) => {
    if (!err) console.log('DB connected successsfully')
    else console.log('DB connection error \n Error: ' + JSON.stringify(err, undefined, 2));
});

exports.sql = mysqlConnection;