const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let FoodSchema = new Schema({
  // cuisine: {
  //   type: String,
  //   required: true,
  //   minLength: 2,
  //   maxLength: 50
  // },
  name: {
    type: String,
    required: true,
    minLength: 2,
    maxLength: 70
  },
  description: {
    type: String,
  }
});

const Food = mongoose.model('Food', FoodSchema);

module.exports = {
  Food,
  FoodSchema, //TODO: Missed this -> type error!
};



