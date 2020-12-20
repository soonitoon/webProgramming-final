const {Router} = require('express');
const { renderString } = require('nunjucks');
const User = require('../MongoDB/user.model');

const router = Router();

router.post('/join', async (req, res, next) => {
    const {username, password, email} =req.body;
    const exUser = await User.findOne({username});

    if (exUser) {
        req.flash('errorMessage', '사용중인 아이디입니다.');
        return res.redirect('/join');
    }

    await User.create({username, password, email});
    res.redirect('/login');
});

router.post('/login', async (req, res, next) => {
    const {username, password} = req.body;

    const user = await User.findOne({username});

    if (!user) {
        req.flash('errorMessage', '등록되지 않은 아이디입니다.');
        return res.redirect('/login');
    }
    else if (!user.authenticate(password)) {
        req.flash('errorMessage', '잘못된 비밀번호입니다.');
        return res.redirect('/login');
    }

    req.session.isAuthenticated = true;
    req.session.user = {username};

    res.redirect('/');
});

router.get('/logout', (req, res, next) => {
    req.session.destroy();
    res.redirect('/login');
});

module.exports = router;