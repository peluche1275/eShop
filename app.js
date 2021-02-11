const express = require('express')
const app = express()
 
app.set('view engine', 'ejs')

const index = require("./routes/index.js")

const listItem = [{
    "item":"item 1",
    "prix":"5€"
},{
    "item":"item 2",
    "prix":"15€"
}]

app.get('/', function (req, res) {
    res.render('template/template',{ viewPath:'../index',itemList:listItem })
})
 
app.listen(3000)