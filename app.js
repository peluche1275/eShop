const express = require('express')
const {MongoClient} = require('mongodb');
const app = express()

// Mongodb preparation
const uri = "mongodb+srv://nathan:@nA1996plch@cluster0.sglyo.mongodb.net/test?retryWrites=true&w=majority"
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function connectToDatabase(){
    await client.connect();
    const collectionItem = client.db("eshop").collection("item");
    console.log("connecté à la database!")
    console.log(await collectionItem.findOne({ id: "0" }))
}

connectToDatabase();

//  ---------------
 
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