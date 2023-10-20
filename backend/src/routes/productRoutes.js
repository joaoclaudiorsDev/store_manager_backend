const router = require('express').Router();

const { productController } = require('../controllers');

router.get('/', productController.listAllProducts);

router.get('/:id', productController.getProductById);

module.exports = router;
