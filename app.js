// import express from 'express'
const express = require("express"),
      app = express(),
      fs = require("fs")

// const files = fs.readdir(__dirname, (err, files) => {console.log(files)})
// console.log(files)

app.use(express.static(__dirname))

projects = [`index`, `drum-kit`, `clock`, `css-variables`, `array-cardio`]

projects.forEach((project, day) => {
    app.get(`/${project === "index" ? "" : project}`, (req, res) => {
        res.sendFile(`${__dirname}/day-${day}-${project}/${project}.html`)
    })
})

let port = process.env.PORT
port = (port == null || port == "") ? 3000 : port
app.listen(port, () => {console.log(`Ya, I hear ya.`)})
