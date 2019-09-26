class SQL_SERVER {
    constructor(host, user, password, database, port) {
        //Create mssql object
        var sql = require('mssql');
        //Config for your server connection
        const config = {
            user: user,
            password: password,
            server: host,
            database: database,
            port: parseInt(port)
        }
        // connect to your database
        sql.connect(config, function (err) {
            if (err) {
                console.log(err);
            } else {
                // create Request object
                var request = new sql.Request();
                // query to the database and get the records
                request.query('select * from ban_an', function (err, recordset) {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log(recordset.recordset[0]);
                    }
                });
            }
        });
    }
}

module.exports = SQL_SERVER