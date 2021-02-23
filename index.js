var mysql = require('mysql');

var DatabaseConfig = { host: "localhost", database: "node-mysql", user: "root", password: "", }

var con = mysql.createConnection(DatabaseConfig);
con.connect(function (error) {
    if (error) {
        console.log("Connection Failed!");
    } else {
        console.log("Connection Successful!");
        InsertData(con);
    }
});

function InsertData(con) {
    let query = "INSERT INTO `student`(`name`, `roll`, `class`, `phone`, `city`, `gurdian`) VALUES ('Humayun Kabir', '140108','Bachelor','242482','Sylhet','Prince')";
    con.query(query, function (error) {
        if (error) {
            console.log('Insert Failed!');
        } else {
            console.log("Insert Success");
        }
    });

}