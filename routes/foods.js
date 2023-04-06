const router = require('express').Router({mergeParams: true});
const { postFood, getFoods } = require('./../controllers/foodControllers');
const formValidator = require('./../validators/validator');



router.get('/', getFoods);
router.post('/',  formValidator.foodFormValidator, postFood);




module.exports = router;