const express = require('express');
const {asyncWrapper} = require('../helpers');
const {authenticate} = require('../middlewares');
const controllers = require('../controllers/collection');

const router = new express.Router();

router.post('/create', authenticate, asyncWrapper(controllers.create));

router.get('/', asyncWrapper(controllers.getAll));

router.get('/details/:_id', asyncWrapper(controllers.details));

router.get('/delete/:_id', authenticate, asyncWrapper(controllers.deleteCollection));

router.patch('/update/:_id', authenticate, asyncWrapper(controllers.update));

router.get('/trending', asyncWrapper(controllers.getTrending));

module.exports = router;