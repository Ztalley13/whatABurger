var mysql = require('mysql');

var connection;

if (process.env.JAWSDB_URL) {

	connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
	connection = mysql.createConnection({
		port: 3306,
		host: '	h40lg7qyub2umdvb.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
		user: "zlb71qkslh9ecdkj",
		password: 'nwysha94b9ujko16',
		database: 'bljair264h181e89'
	})
};

connection.connect(function(err) {
  if (err) {
    console.error('ERROR: MySQL connection error -- ' + err.stack + '\n\n');
    return;
  }
  console.log('Connected to MySQL database as id ' + connection.threadId + '\n\n');
});

module.exports = connection;