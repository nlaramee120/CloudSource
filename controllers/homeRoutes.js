const router = require('express').Router();
const { doc } = require('prettier');
const { Developer } = require('../models');
const withAuth = require('../utils/auth');


router.get('/', async (req, res) => {
    try {
        res.render('homepage')
    } catch (err) {
        res.status(500).json(err);
    }
})

router.get('/login', async (req, res) => {
    try {
        res.render('login')
    } catch (err) {
        res.status(500).json(err);
    }
})

router.get('/signup', async (req, res) => {
    try {
        res.render('signup')
    } catch (err) {
        res.status(500).json(err);
    }
})

router.get('/profile', withAuth, async (req, res) => {
    try {
        res.render('profile')
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;