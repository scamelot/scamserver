const express = require('express')
const fs = require('fs')

const app = express()
const port = 8000

app.use('/static', express.static('./'))

app.get('/', (req, res) => {
    fs.readFile('../index.html', (err, html) => {
        if (err) {
          throw err;
        }
    res.send(html)
    })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})