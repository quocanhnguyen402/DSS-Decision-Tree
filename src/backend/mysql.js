class MySQL{
    constructor(host,user,password,database){
        var mysql = require('mysql');

        this.con = mysql.createConnection({
            host: host,
            user: user,
            password: password,
            database: database
        });
    }
    
    get_data(callback){
        //The connection variable
        const CONNECT = this.con;
        //Test the connection to mysql server
        CONNECT.connect(function(err) {
            if (err) throw err;
            //The query
            var query = "SELECT * FROM ban_an";
            //Perform the query and return it with callback :^)
            CONNECT.query(query, function (err, result, fields) {
                if (err) throw err;
                return callback(result);
            });
        });
    }
}

module.exports = MySQL