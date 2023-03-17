const mongoose = require('mongoose');
let mongoDB = `mongodb+srv://wenwen:Langara2023@cluster0.i89ae4x.mongodb.net/CPSC2600-project?retryWrites=true&w=majority`;

module.exports = mongoose.connect(mongoDB);