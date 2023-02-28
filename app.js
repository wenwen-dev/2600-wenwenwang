const express = require('express');
const app = express();
const connected = require('./connection');
const router = require('./routes/index');

app.use(express.json());
app.use('/api/v1', router);

connected
.then(() => {
  console.log('Connected to database!');
  const server = app.listen(8080, () => console.log('Listening...'));
})