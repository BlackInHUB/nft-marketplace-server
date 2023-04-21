const express = require('express');
const {asyncWrapper} = require('../helpers');
const {authenticate} = require('../middlewares');
const {upload} = require('../middlewares');
const controllers = require('../controllers/user');

const router = new express.Router();

router.post('/register', asyncWrapper(controllers.register));

router.post('/login', asyncWrapper(controllers.login));

router.get('/logout', authenticate, asyncWrapper(controllers.logout));

router.patch('/update', 
    authenticate, 
    upload.fields([{name: 'avatarUrl', maxCount: 1}, {name: 'profileCover', maxCount: 1}]), 
    asyncWrapper(controllers.update));

router.get('/current', authenticate, asyncWrapper(controllers.current));

router.get('/all', asyncWrapper(controllers.allUsers));

module.exports = router;