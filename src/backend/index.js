//To read .env file
const env = require('dotenv').config();

//Server class
const Server = require('./server');
var server = new Server(process.env.PORT,'/src/public/index.html');

// //MySQL class
// const MySQL = require('./mysql');
// var mysql = new MySQL(  process.env.MYSQL_HOST,
//                         process.env.MYSQL_USERNAME,
//                         process.env.MYSQL_PASSWORD,
//                         process.env.MYSQL_DATABASE_NAME );

//SQL_server class
const SQL_SERVER = require('./sql_server');
var sql_server = new SQL_SERVER(process.env.SQL_SERVER_HOST,
                            process.env.SQL_SERVER_USERNAME,
                            process.env.SQL_SERVER_PASSWORD,
                            process.env.SQL_SERVER_DATABASE_NAME
                            ,process.env.SQL_SERVER_PORT);

//Aff file class
// const AFF_DATA_FILE = require('./aff_data_file');
// var aff_data_file = new AFF_DATA_FILE(mysql);


