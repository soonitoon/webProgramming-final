const {Router} = require('express');
const {models:{Text}} = require('../MongoDB/index');

const router = Router();

router.post('/write', async (req, res, next) => {
    const {nickname, title, text} = req.body;

    await Text.create({nickname, title, text});
    res.redirect('/');
});

module.exports = router;