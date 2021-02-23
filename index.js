var mysql = require('mysql');

var DatabaseConfig = { host: "localhost", database: "node-mysql", user: "root", password: "", }

var con = mysql.createConnection(DatabaseConfig);
con.connect(function (error) {
    if (error) {
        console.log("Connection Failed!");
    } else {
        console.log("Connection Successful!");
    }
})