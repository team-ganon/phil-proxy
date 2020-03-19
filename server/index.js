const express = require('express');
//const { User, Review } = require('./db/index.js')
const cors = require('cors');
let app = express();
app.use(express.json());
app.use(express.static(__dirname + '/../public/dist'));

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}
app.listen(port);