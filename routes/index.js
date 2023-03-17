const router = require('express').Router({mergeParams: true});
const foodRouter = require('./foods');
// const restaurantRouter = require('./restaurants');
const cuisineRouter = require('./cuisines');

router.use('/foods', foodRouter);
// router.use('/restaurants', restaurantRouter);
router.use('/cuisines', cuisineRouter);




module.exports = router;