const express = require('express');
const {asyncWrapper} = require('../helpers');
const {upload, authenticate} = require('../middlewares');
const controllers = require('../controllers/nft');

const router = new express.Router();

router.post('/add', authenticate, upload.single('imageUrl'), asyncWrapper(controllers.add));
router.get('/users', authenticate, asyncWrapper(controllers.getUsersNft));
router.get('/nft/:_id', authenticate, asyncWrapper(controllers.getDetails));
router.get('/', asyncWrapper(controllers.getAll));
router.get('/profile/:_id', authenticate, asyncWrapper(controllers.getProfileNft));

module.exports = router;