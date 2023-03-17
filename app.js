const express = require('express');
const app = express();
const connected = require('./db/connection');
const router = require('./routes/index');

app.use(express.static('public'));
app.use(express.json());
// app.use(express.urlencoded({extended:true}));
app.use('/api/v1', router);

connected
.then(() => {
  console.log('Connected to database!');
  const server = app.listen(8080, () => console.log('Listening...'));
})

app.get('/testing', (req, res) => {
  res.send('Hi');
})
