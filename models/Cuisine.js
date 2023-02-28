const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const CuisineSchema = new Schema({

});

const Cuisine = mongoose.model('Cuisine', CuisineSchema);

module.exports = Cuisine;



