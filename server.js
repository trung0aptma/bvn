const data = require("./db/data.js")


const path = require("path")
const http = require("http")

const express = require('express');
const app = express();
const port = 8080;

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
})

app.get('/getData', function (req, res) {
    // res.sendFile(path.join(__dirname, "index.html"));
    res.json({ data: data });
})


app.listen(port, function () {
    console.log("Your app running on port " + port);
    console.log(__dirname);
})



