const express = require('express')
const app = express()
const port = 3001

const db = require('./db');

app.get('/', (req, res) => {
    db('methods') //shorthand select
    // db.select('*').from('methods')
    .then((rows) => {
      res.send(rows);
    })
    .catch((err) => {
      next(err);
    });
})

app.listen(port, () => console.log(`Example app listening on port ${port}! Yay SQL!`))