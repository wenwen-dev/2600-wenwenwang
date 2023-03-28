const Cuisine = require('./../models/Cuisine');


const getCuisines = (req, res) => {
  Cuisine.find({})
  .then(results => res.status(200).send(results.data))
  .catch(error => res.json(error));
}

const getCuisine = (req, res) => {
  Cuisine.find({_id: req.params.cuisineID}).exec()
  .then(result => res.json(result))
  .catch(error => res.json(error));
}

const postCuisine = (req, res) => {
  
  let newCuisine = new Cuisine({
    name: 'Mediterranean',
    // foods: [{
    //   name: 'yu xiang'
    // }] - //TODO: does not work, why? I do NOT need to create Food from Cuisine, but would be good to find out why it does not work.
  });


  newCuisine.save()
  .then(result => res.status(200).json(result))
  .catch(error => res.json(error));
}

module.exports = 
{
  getCuisines,
  getCuisine,
  postCuisine
}