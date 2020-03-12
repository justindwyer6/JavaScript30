import express from 'express'
const app = express()

app.use(express.static(__dirname + "/day-2-clock"))
// app.set('views', __dirname)
// app.engine('html', require('ejs').renderFile);
// app.set('view engine', 'html')

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/day-2-clock/clock.html")
})

let port = process.env.PORT
port = (port == null || port == "") ? 3000 : port
app.listen(port, () => {console.log(`Ya, I hear ya.${__dirname}`)})
