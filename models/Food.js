const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const FoodSchema = new Schema({

});

const Food = mongoose.model('Food', FoodSchema);

module.exports = Food;



