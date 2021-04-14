


const mysql = require('mysql');
const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");

var app = express();


const port = 5000;

//start mysql connections
const connection = mysql.createConnection({
  host     : 'localhost', //mysql database host name
  user     : 'root', //mysql database user name
  password : 'password', //mysql database password
  database : 'studentmanagement' //mysql database name
});
 
connection.connect(function(err) {
  if (err) throw err
  console.log('You are now connected to the database...')
})
//end mysql connection
 
//start body-parser configuratio
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodie
  extended: false
}));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
//app.use(cors())




app.get('/', (req, res) => {
  res.send('Hello World!')
})





//rest api to get all resul
app.get('/students', function (req, res) {
   connection.query('SELECT * FROM student_details ', function (error, results, fields) {
	  if (error) throw error;
      res.send(results);
      //console.log(results.body)
	});
});



//rest api to get particular student information
app.get('/student', function (req, res) {
  connection.query('SELECT * FROM student_details WHERE student_id = ?',[req.query.id], function (error, results, fields) {
   if (error) throw error;
     res.send(results);
     console.log(req.params.id)
 });
});


// post route to add new student
app.post('/addstudent', function (req, res) {
  var postData  = req.body;
  // console.log(postData)
  connection.query('INSERT INTO student_details SET ?', req.body, function (error, results, fields) {
   if (error) throw error;
  res.end(JSON.stringify(results));
  console.log(results)
 });

});

// get list of students based on different query

app.get('/list', function (req, res) {
  
  // console.log(postData)
  const fname = req.query.fname;
  const lname = req.query.lname;
  const city = req.query.city;
  const email = req.query.email;
  console.log(req.query)
  connection.query('SELECT * FROM student_details WHERE  fname = ? or city = ?',[fname,city], function (error, results, fields) {
   if (error) throw error;
  res.end(JSON.stringify(results));
  console.log(results)
 });

});








// TEST ROUT
app.get('/api/users', function(req, res) {
  
  console.log(req.query)
  res.send(req.params);
  // url : http://localhost:3003/api/users?id=4&token=sdfa3&geo=us
});

app.get('/users/:userId/books/:bookId', function(req, res) {
  const user_id = req.params.userId;
  const bookId = req.params.bookId;
  
  console.log(req.query)
  res.send(req.params);
  // url : http://localhost:3003/users/34/books/8989
});







app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })
  