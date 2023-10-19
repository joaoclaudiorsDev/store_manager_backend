const express = require('express');

const router = express.Router();
const Controller = require('../controllers/index');

router.get('/products', Controller.listAllProducts);

router.get('/products/:id', Controller.getProductById);

module.exports = router;
