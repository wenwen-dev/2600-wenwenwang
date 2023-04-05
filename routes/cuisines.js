const router = require('express').Router({mergeParams: true});
const { postCuisine, getCuisines, getCuisine } = require('./../controllers/cuisineControllers');
const formValidator = require('./../validators/validator');

router.get('/', getCuisines);
router.get('/:cuisineID', getCuisine);
router.post('/', formValidator.cuisineFormValidator, postCuisine);

module.exports = router;