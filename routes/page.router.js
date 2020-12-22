const {Router} = require('express');
const {requireAuthentication} = require('../middlewares/auth')

const router = Router();

router.get('/', (req, res, next) => {
    res.render('index', {
        title: 'Simple Board',
        errorMessage: req.flash('errorMessage')
    });
});

router.get('/join', (req, res, next) => {
    res.render('join', {
        title: 'Simple Board - 회원가입',
        errorMessage: req.flash('errorMessage')
    });
});

router.get('/login', (req, res, next) => {
    res.render('login', {
        title: 'Simple Board - 로그인',
        errorMessage: req.flash('errorMessage')
    });
});

router.get('/write', requireAuthentication, (req, res, next) => {
    res.render('write', {
        title: 'Simple Board - 글쓰기',
        errorMessage: req.flash('errorMessage')
    });
});

module.exports = router;