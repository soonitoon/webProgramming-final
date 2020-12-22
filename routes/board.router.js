const {Router} = require('express');
const {models:{Text}} = require('../MongoDB/index');
const {requireAuthentication} = require('../middlewares/auth')

const router = Router();

router.get('/board', requireAuthentication, async (req, res, next) => {
    res.render('board', {
        title: 'Simple Board - 게시판',
        errorMessage: req.flash('errorMessage')
    });
});

module.exports = router;