const Cuisine = require('./../models/Cuisine');


const getCuisines = (req, res) => {
  Cuisine.find({}).exec()
  .then(results => {
    res.json(results);
    console.log(results);
    console.log('all cuisines sent!');
  })
  .catch(error => console.log(error));
}

const getCuisine = (req, res) => {
  Cuisine.find({_id: req.params.cuisineID}).exec()
  .then(result => res.json(result))
  .catch(error => res.json(error));
}

const postCuisine = (req, res) => {
  
  let newCuisine = new Cuisine({
    name: req.body.name,
    // foods: []
  });

  newCuisine.save()
  .then(result => {
    console.log('new cuisine saved');
    res.json(result);
  })
  .catch(error => res.json(error));
}

module.exports = 
{
  getCuisines,
  getCuisine,
  postCuisine
}