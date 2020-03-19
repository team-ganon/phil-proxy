const express = require('express');
const { User, Review } = require('./db/index.js')
const cors = require('cors');
let app = express();
app.use(express.json())
//app.use(express.static(__dirname + '/../public/dist'));

app.get('', cors(), async (req, res) => {

})

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3001;
}
app.listen(port);