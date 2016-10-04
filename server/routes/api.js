var express = require('express');
var passport = require('passport');
var router = express.Router();

router.use('/', passport.authenticate('jwt', {
    session: false
}), function(req, res) {
    res.json({
        msg: "It worked",
        id: req.user._id
    });
});

router.get('/dashboard', passport.authenticate('jwt', {
    session: false
}), function(req, res) {
    res.json({
        msg: "It worked",
        id: req.user._id
    });
});

router.get('/dash', function(req, res, next) {
    console.log("inside dash router");

    console.log(req.query.username);
    res.send('dash');
});

module.exports = router;
