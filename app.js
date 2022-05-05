const express = require('express')
const app = express()
const path = require('path')
const port = process.env.PORT || 8080

// Serve all static files such as js and css
app.use('/public', express.static('public'))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'));
})

app.listen(port)
console.log('Server started at http://localhost:' + port);
