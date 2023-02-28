const express = require('express');
const app = express();
const connected = require('./connection');

connected
.then(() => {
  console.log('Connected to database!');
  const server = app.listen(8080, () => console.log('Listening...'));
})