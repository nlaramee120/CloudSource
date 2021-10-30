const withAuth = (req, res, next) => {
    //REDIRECT TO LOGIN ROUTE IF USER IS NOT LOGGED IN
    if (!req.session.logged_in) {
        res.redirect('/login');
    } else {
        next();
    }
};

module.exports = withAuth;