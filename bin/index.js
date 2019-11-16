import express from 'express'
import bodyParser from 'body-parser'
import path from 'path'

import serviceStatus from './utils/serviceStatus'

const HOST = "localhost"
const PORT = "8080"

const app = express()
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

const staticDir = path.join(__dirname, '..', 'dist')
app.use(express.static(staticDir))

const filesDir = path.join(__dirname, '..', 'files')
app.use('/files', express.static(filesDir))

// const management = require('./routes/management')

app.get('/', (req, res) => res.sendFile(path.join(__dirname + '/../dist/index.html')))

// app.use('/management', management)
// app.get('/:id', (req, res) => res.sendFile(path.join(__dirname + '/templates/content.html')))

app.listen(PORT, HOST)

console.log(`Running on http://${HOST}:${PORT}`)