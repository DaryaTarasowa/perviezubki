const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'build'), {
  index: false,
  immutable: true,
  cacheControl: true,
  maxAge: "30d"
}));



// app.use(express.static(__dirname + "/public", {
//     index: false,
//     immutable: true,
//     cacheControl: true,
//     maxAge: "30d"
// }));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(9000);
console.log("Something should be working");
