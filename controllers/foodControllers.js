const { Food } = require('./../models/Food');
const Cuisine = require('./../models/Cuisine');

const getFoods = (req, res) => {
  Food.find({})
  .exec()
  .then(results=>res.status(200).json(results))
  .catch(error=>console.log(error))
}

// const getFood = (req, res) => {
//   Food.find({name: req.params.id})
//   .exec()
//   .then(result => res.status(200).json(result))
//   .catch(error=>console.log(error))
  
// }

const postFood = (req, res) => {
  if (res.locals.errors != null) {
    res.status(400).json(res.locals.errors[0].message);
  } 

  else {
    const { cuisine, name, description } = req.body;
    Cuisine.findOne({name: cuisine})
    .exec()
    .then(result => {
      let foundCuisine = result;
      let match = foundCuisine.foods.find(food=>food.name === name);
      if (match) {
        res.status(400).json('Food already exists.')
      }
      else {
        let newFood = new Food({
          name: name,
          description: description
        });
        foundCuisine.foods.push(newFood);
        foundCuisine.save()
        .then(result=>res.status(200).json(result))
        .catch(error=>console.log(error))
      }
    })
    .catch(error=>console.log(error))
  }
}


module.exports = {
  postFood,
  getFoods,
  // getFood
}