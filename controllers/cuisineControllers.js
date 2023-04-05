const Cuisine = require('./../models/Cuisine');


const getCuisines = (req, res) => {
  Cuisine.find({}).exec()
  .then(results => {
    res.json(results);
    // console.log(results);
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
  console.log(`the name to look for match is ${req.body.name}`);
  Cuisine.find({'name': req.body.name}).exec()
  .then(result => {
    console.log(`result found: ${result}`);
    if (result.length > 0) {
      res.status(400).json('Cuisine already exists.')
    }
    else {
      let newCuisine = new Cuisine({
        name: req.body.name,
      });
    
      newCuisine.save()
      .then(result => {
        console.log(`new cuisine saved: ${result}`);
        res.status(200).json(result);
      })
      .catch(error => res.json(error));
    }
  })
  
}

module.exports = 
{
  getCuisines,
  getCuisine,
  postCuisine
}