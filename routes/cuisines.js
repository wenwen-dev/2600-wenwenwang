const router = require('express').Router({mergeParams: true});
const {getCuisine, getCuisines, postCuisine} = require('./../controllers/cuisineControllers');

router.get('/', getCuisines);
router.get('/:id', getCuisine);
router.post('/', postCuisine);



module.exports = router;