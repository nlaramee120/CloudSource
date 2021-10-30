const router = require('express').Router();
const { Developer } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try {
        res.render('main')
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;