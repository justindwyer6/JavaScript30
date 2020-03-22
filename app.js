// import express from 'express'
const express = require("express"),
      app = express(),
      fs = require("fs")

app.use(express.static(__dirname))

const allDirectories = fs.readdirSync(__dirname)
const dayDirectories = allDirectories.filter((directory, i) => directory.includes("day-"))
const projectNames = dayDirectories.map((directory, i) => i.toString().length === 1 ? directory.slice(6) : directory.slice(7))

dayDirectories.forEach((project, day) => {
    app.get(`/${projectNames[day] === "index" ? "" : projectNames[day]}`, (req, res) => {
        res.sendFile(`${__dirname}/${project}/${projectNames[day]}.html`)
    })
})

let port = process.env.PORT
port = (port == null || port == "") ? 3000 : port
app.listen(port, () => {console.log(`Ya, I hear ya.`)})
