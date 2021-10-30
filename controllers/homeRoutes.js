const router = require('express').Router();
<<<<<<< HEAD
// const { ??? } = require('../models');
// const withAuth = require('../utils/auth');
=======
const { Developer } = require('../models');
const withAuth = require('../utils/auth');
>>>>>>> b8a4f2081bf24e2c31ed10b995241273efdc54c4

router.get('/', async (req, res) => {
    try {
        res.render('login')
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;