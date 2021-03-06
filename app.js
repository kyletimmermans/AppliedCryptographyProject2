const express = require('express')
const app = express()
const path = require('path')
const port = process.env.PORT || 8080

// Serve all static files such as js and css
app.use('/public', express.static('public'))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/main.html'));
})

app.get('/questionaire', (req, res) => {
  res.sendFile(path.join(__dirname, '/form.html'));
})

app.get('/lamport', (req, res) => {
  res.sendFile(path.join(__dirname, '/result-lamport.html'));
})

app.get('/gottesman', (req, res) => {
  res.sendFile(path.join(__dirname, '/result-gottesman.html'));
})

app.get('/rsa', (req, res) => {
  res.sendFile(path.join(__dirname, '/result-rsa.html'));
})

app.get('/dsa', (req, res) => {
  res.sendFile(path.join(__dirname, '/result-dsa.html'));
})

app.get('/ecdsa', (req, res) => {
  res.sendFile(path.join(__dirname, '/result-ecdsa.html'));
})

app.get('/schnorr', (req, res) => {
  res.sendFile(path.join(__dirname, '/result-schnorr.html'));
})

app.get('/ring', (req, res) => {
  res.sendFile(path.join(__dirname, '/result-ring.html'));
})

app.get('/designated', (req, res) => {
  res.sendFile(path.join(__dirname, '/result-designated.html'));
})

app.get('/threshold', (req, res) => {
  res.sendFile(path.join(__dirname, '/result-threshold.html'));
})


app.listen(port)
console.log('Server started at http://localhost:' + port);
