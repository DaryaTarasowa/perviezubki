const express = require('express');
const path = require('path');
const app = express();
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : '185.224.138.154',
  user     : 'u543051139_vassilisha',
  password : 'rfhfvtkm123',
  database : 'u543051139_teeth'
});

app.use(express.static(path.join(__dirname, 'build')));

// connection.connect(function(err){
// if(!err) {
//     console.log("Database is connected ... \n\n");
// } else {
//     console.log("Error connecting database ... \n\n");
// }});

app.use(express.static(path.join(__dirname, 'build'), {
  index: false,
  immutable: true,
  cacheControl: true,
  maxAge: "30d"
}));



app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(9000);
console.log("Something should be working");
