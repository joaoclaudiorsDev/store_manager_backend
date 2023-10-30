const router = require('express').Router();

const { productController } = require('../controllers');

router.get('/', productController.listAllProducts);

router.get('/:id', productController.getProductById);

router.post('/', productController.postNewProduct);

router.put('/:id', productController.updateProduct);

module.exports = router;
