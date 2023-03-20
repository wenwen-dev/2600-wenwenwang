const { Food } = require('./../models/Food');
//TODO: used const Food, instead of { Food } -> Food is not a constructor error (coz 2 objects exported and I refer to both if not using {}!)

// const getFoods = (req, res) => {

// }

// const getFood = (req, res) => {
  
// }

const postFood = (req, res) => {
  // Food.findOne({name: })
  console.log(req.body);
  const { cuisine, name } = req.body;
  let newFood = new Food({
    cuisine,
    name
  });

  newFood.save()
  .then(result => res.status(200).json(result))
  .catch(error => res.json(error));
  
}

module.exports = {postFood}