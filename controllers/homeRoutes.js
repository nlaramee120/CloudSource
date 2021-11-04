const router = require('express').Router();
const withAuth = require('../utils/auth');

const myusername = 'user1';
const mypassword = 'mypassword';
var session;

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

//TODO -- ADD WITHAUTH WHEN LOGIN WORKS
router.get('/build', async (req, res) => {
    try {
        res.render('build')
    } catch (err) {
        res.status(500).json(err)
    }
})


module.exports = router;