const express = require('express');
const app = express();
const connected = require('./db/connection');
const router = require('./routes/index');

app.use(express.json());
app.use('/api/v1', router);

connected
.then(() => {
  console.log('Connected to database!');
  const server = app.listen(8080, () => console.log('Listening...'));
})

// TODO list
//TODO: Fill in Schema for food, restaurant, and cuisine
//TODO: Test in Postman before moving on to validation
//TODO: Validate data when coming into server
//TODO: Validate data on layer of MongoDB database schemas
