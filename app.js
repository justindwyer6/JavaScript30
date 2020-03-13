// import express from 'express'
const express = require("express")
const app = express()

app.use(express.static(__dirname))
// app.set('views', __dirname)
// app.engine('html', require('ejs').renderFile);
// app.set('view engine', 'html')
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "YOUR-DOMAIN.TLD"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/day-0-index/index.html")
})

app.get('/drums', (req, res) => {
    res.sendFile(`${__dirname}/day-1-drum-kit/drum-kit.html`)
})

app.get('/clock', (req, res) => {
    res.sendFile(`${__dirname}/day-2-clock/clock.html`)
})

let port = process.env.PORT
port = (port == null || port == "") ? 3000 : port
app.listen(port, () => {console.log(`Ya, I hear ya.`)})
