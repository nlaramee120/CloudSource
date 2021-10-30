const router = require('express').Router();

// require all routes into here:
const devRoutes = require('./devRoutes')


// router.use all routes into here:
router.use('/developers', devRoutes)

module.exports = router;
