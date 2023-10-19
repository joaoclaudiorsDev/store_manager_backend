const express = require('express');

const router = express.Router();
const productController = require('../controllers/productController');

router.get('/products', productController.listAllProducts);

router.get('/products/:id', productController.getProductById);

module.exports = router;
