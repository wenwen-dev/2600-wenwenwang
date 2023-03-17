const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { FoodSchema } = require('./Food');

let CuisineSchema = new Schema({
  name: {
    type: String,
    required: true,
    minLength: 2,
    maxLength: 30
  },
  foods: [FoodSchema]
});

const Cuisine = mongoose.model('Cuisine', CuisineSchema);

module.exports = Cuisine;



