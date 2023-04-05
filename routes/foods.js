const router = require('express').Router({mergeParams: true});
// const {getFoods, getFood, postFood} = require('./../controllers/foodControllers');
const { postFood, getFoods } = require('./../controllers/foodControllers');
const formValidator = require('./../validators/validator');



router.get('/', getFoods);
// router.get('/:id', getFood);
router.post('/',  formValidator.foodFormValidator, postFood);




module.exports = router;