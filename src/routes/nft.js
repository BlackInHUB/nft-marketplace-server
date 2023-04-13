const express = require('express');
const {asyncWrapper} = require('../helpers');
const {upload, authenticate} = require('../middlewares');
const controllers = require('../controllers/nft');

const router = new express.Router();

router.post('/add', authenticate, upload.single('imageUrl'), asyncWrapper(controllers.add));

module.exports = router;