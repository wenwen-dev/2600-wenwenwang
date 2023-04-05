const router = require('express').Router({mergeParams: true});
const foodRouter = require('./foods');
const cuisineRouter = require('./cuisines');

router.use('/foods', foodRouter);
router.use('/cuisines', cuisineRouter);




module.exports = router;