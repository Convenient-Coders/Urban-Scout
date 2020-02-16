const express = require('express')
const app = express()
const path = require('path')
const port = process.env.PORT || 8080
const http = require('http').Server(app)

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'))
})

app.get('/script.js', (req, res) => {
    res.sendFile(path.join(__dirname + '/script.js'))
})

app.get('/style.css', (req, res) => {
    res.sendFile(path.join(__dirname + '/style.css'))
})

app.get('/findWater', async (req, res) => {
    res.sendFile(path.join(__dirname + "/water.txt"))
})

app.get('/findBin', async (req, res) => {
    res.sendFile(path.join(__dirname + "/bin.txt"))
})

app.get('/findWifi', async (req, res) => {
    res.sendFile(path.join(__dirname + "/wifi.txt"))
})

const server = http.listen(port, function() {
    console.log(`listening on *: ${port}`);
});