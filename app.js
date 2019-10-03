const express = require('express');
//const MongoClient = require('mongodb').MongoClient;
const mongoose = require('mongoose')
require("dotenv").config();


/*const uri = "mongodb+srv://bjarnie3:KxrMyYQA123@nodeapi-tgxay.mongodb.net/admin?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
*/

//app
const app = express();
const { Client } = require('mongoose');

//db mongoose

mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true
})
.then(() => console.log("DB Connected"));

// routes
app.get("/", (req,res) => {
    res.send("hello Bjarni");
});

/*
const client = new Client()
client.connect()
client.query('SELECT $1::text as message', ['Hello world!'], (err, res) => {
  console.log(err ? err.stack : res.rows[0].message) // Hello World!
  client.end()
});
*/
const port = process.env.PORT || 8000

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
});