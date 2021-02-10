const express = require('express');
const app = express();
 
app.set('view engine', 'ejs');

const index = require("./routes/index.js");

app.get('/', index)
 
app.listen(3000)