const router = require('express').Router();

// require all routes into here:
const devRoutes = require('./devRoutes')
const empRoutes = require('./empRoutes')


// router.use all routes into here:
router.use('/developers', devRoutes)
router.use('/employers', empRoutes)

module.exports = router;
