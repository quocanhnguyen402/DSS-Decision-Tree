class Server{
    constructor(port,path){
        //Create server
        var express = require('express');
        var app = express();
        app.use(express.static('public'));
        this.http = require('http').Server(app);

        //Define the default route
        app.get('/', function (req, res) {
            res.sendFile(__dirname + path);
        });

        this.listen(port);
    }

    listen(port){
        //Listen to the given port
        this.http.listen(port, function () {
            console.log("Listening on * " + port);
        });
    }
}

module.exports = Server