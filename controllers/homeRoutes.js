const router = require('express').Router();
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try {
        let logged_in = false;
        if (req.session && req.session.logged_in) {
            logged_in = true;
        }
        
        res.render('homepage', {logged_in: logged_in})
    } catch (err) {
        res.status(500).json(err);
    }
})

router.get('/login', async (req, res) => {
    try {
        let logged_in = false;
        if (req.session && req.session.logged_in) {
            logged_in = true;
        }

        res.render('login', {logged_in: logged_in})
    } catch (err) {
        res.status(500).json(err);
    }
})

router.get('/signup', async (req, res) => {
    try {
        let logged_in = false;
        if (req.session && req.session.logged_in) {
            logged_in = true;
        }

        res.render('signup', {logged_in: logged_in})
    } catch (err) {
        res.status(500).json(err);
    }
})

router.get('/profile', withAuth, async (req, res) => {
    try {
        let logged_in = false;
        if (req.session && req.session.logged_in) {
            logged_in = true;
        }

        res.render('profile', {logged_in: logged_in})
    } catch (err) {
        res.status(500).json(err);
    }
})

//TODO -- ADD WITHAUTH WHEN LOGIN WORKS
router.get('/build', withAuth, async (req, res) => {
    try {
        let logged_in = false;
        if (req.session && req.session.logged_in) {
            logged_in = true;
        }

        res.render('build', {logged_in: logged_in})
    } catch (err) {
        res.status(500).json(err)
    }
})


module.exports = router;