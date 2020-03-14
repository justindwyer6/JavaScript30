// import express from 'express'
const express = require("express")
const app = express()

app.use(express.static(__dirname))

app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/day-0-index/index.html`)
})

app.get('/drums', (req, res) => {
    res.sendFile(`${__dirname}/day-1-drum-kit/drum-kit.html`)
})

app.get('/clock', (req, res) => {
    res.sendFile(`${__dirname}/day-2-clock/clock.html`)
})

app.get('/css-variables', (req, res) => {
    res.sendFile(`${__dirname}/day-3-css-variables/css-variables.html`)
})

let port = process.env.PORT
port = (port == null || port == "") ? 3000 : port
app.listen(port, () => {console.log(`Ya, I hear ya.`)})
