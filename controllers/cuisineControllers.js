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
  Cuisine.findOne({name: req.params.cuisineID}).exec()
  .then(result => {
    //TODO: add if empty collection found - is it possible?
    console.log(`ahaha: # ${result}`);
    res.status(200).json(result);
  })
  .catch(error => res.json(error));
}

const postCuisine = (req,res) => {
  if (res.locals.errors != null) {
    res.status(400).json(res.locals.errors[0].message);
  } 

  else {
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
          res.status(200).json(result);
        })  
        // .catch(error => res.json(error));
        .catch(error => console.log(error));
      }
    })

  }


  
}

module.exports = 
{
  getCuisines,
  getCuisine,
  postCuisine
}