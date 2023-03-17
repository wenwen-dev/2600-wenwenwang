const router = require('express').Router({mergeParams: true});
const { postCuisine, getCuisines, getCuisine } = require('./../controllers/cuisineControllers');

router.get('/', getCuisines);
router.get('/:cuisineID', getCuisine);
router.post('/', postCuisine);

module.exports = router;