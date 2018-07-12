const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();

// Create MySQL connection
const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "angularapp"
});

var corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200  
};


//Initialisation 
app.listen(8000, () => {
    console.log('Server started!');
});
app.use(bodyParser.json());
app.use(cors(corsOptions));
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

// Insert books in database
app.route('/api/add-book').post((req, res)=>{
    var sql = "INSERT INTO books (name, author, year, editorial) VALUES ('"+req.body['name']+"','"+req.body['author']+"',"+req.body['year']+",'"+req.body['editorial']+"')";
    con.query(sql, function (err, result) {
	if (err) throw err;
	console.log("1 record inserted");
    });
    res.status(201).send(req.body);
});

// Request 5 random books
app.route('/api/top-books').get((req, res)=>{
    var sql = "SELECT * FROM books ORDER BY RAND() LIMIT 4";
    con.query(sql, function (err, result, fields) {
	if (err) throw err;
	res.status(201).send(result);
    });
});

// Request 10 books
app.route('/api/books').post((req, res) => {
    var sql = "SELECT * FROM books LIMIT "+req.body['limit']+" OFFSET "+req.body['offset'];
    con.query(sql, function (err, result, fields) {
	if (err) throw err;
	res.status(201).send(result);
    });
});