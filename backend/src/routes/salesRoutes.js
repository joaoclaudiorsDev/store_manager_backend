const router = require('express').Router();

const { salesController } = require('../controllers');

const { 
  validateProductId, 
  validateQuantity, 
  quantityIsZeroOrLess, 
  validateProductsWithId,
} = require('../middlewares');

router.get('/', salesController.listAllSales);

router.get('/:id', salesController.getSaleById);

router.post(
  '/',
  validateProductId,
  quantityIsZeroOrLess,
  validateQuantity,
  validateProductsWithId,
  salesController.postSale,
);

module.exports = router;