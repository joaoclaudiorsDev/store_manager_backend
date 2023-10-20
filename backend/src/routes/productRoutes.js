const router = require('express').Router();

const { productControlller } = require('../controllers');

router.get('/products', productControlller.listAllProducts);

router.get('/products/:id', productControlller.getProductById);

module.exports = router;
