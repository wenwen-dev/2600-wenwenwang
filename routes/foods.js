const router = require('express').Router({mergeParams: true});
// const {getFoods, getFood, postFood} = require('./../controllers/foodControllers');
const { postFood } = require('./../controllers/foodControllers');


// router.get('/', getFoods);
// router.get('/:id', getFood);
router.post('/', postFood);




module.exports = router;