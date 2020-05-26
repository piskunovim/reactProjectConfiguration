import express from 'express'
import bodyParser from 'body-parser'
import path from 'path'
import rateLimit from 'express-rate-limit'

const HOST = "localhost"
const PORT = "8080"
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, 
    max: 100
})

const app = express()
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

const staticDir = path.join(__dirname, '..', 'dist')
app.use(express.static(staticDir))

const filesDir = path.join(__dirname, '..', 'files')
app.use('/files', express.static(filesDir))

app.use(limiter)
// const management = require('./routes/management')

app.get('/', (req, res) => res.sendFile(path.join(__dirname + '/../dist/index.html')))

// app.use('/management', management)
// app.get('/:id', (req, res) => res.sendFile(path.join(__dirname + '/templates/content.html')))

app.listen(PORT, HOST)

console.log(`Running on http://${HOST}:${PORT}`)