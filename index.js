var mysql = require('mysql');

var DatabaseConfig = { host: "localhost", database: "node-mysql", user: "root", password: "", }

var con = mysql.createConnection(DatabaseConfig);
con.connect(function (error) {
    if (error) {
        console.log("Connection Failed!");
    } else {
        console.log("Connection Successful!");
        // InsertData(con);
        // DeleteData(con);
        UpdateData(con);
    }
});

function InsertData(con) {
    let query = "INSERT INTO `student`(`name`, `roll`, `class`, `phone`, `city`, `gurdian`) VALUES ('Ahsan Kabir', '140109','Bachelor','242482','Sylhet','Prince')";
    con.query(query, function (error) {
        if (error) {
            console.log('Insert Failed!');
        } else {
            console.log("Insert Success");
        }
    });
}

function DeleteData(con) {
    let query = "DELETE FROM `student` WHERE `id`='2'";
    con.query(query, function (error) {
        if (error) {
            console.log('Delete Failed!');
        } else {
            console.log("Delete Success");
        }
    });
}

function UpdateData(con) {
    let query = "UPDATE `student` SET `name`='Ahsan Habib',`roll`='235429' WHERE `id`='3'";
    con.query(query, function (error) {
        if (error) {
            console.log('Update Failed!');
        } else {
            console.log("Update Success");
        }
    });
}