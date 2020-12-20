const { model } = require("mongoose");

const authenticated = (req, res, next) => {
    res.locals.isAuthenticated = req.session.isAuthenticated;
    if (req.session.isAuthenticated) {
        res.locals.user = req.session.user;
    }
    next();
};

const requireAuthentication = (req, res, next) => {
    if (req.session.isAuthenticated) {
        next();
    }
    else {
        res.redirect('/login');
    }
};

module.exports = {authenticated, requireAuthentication}