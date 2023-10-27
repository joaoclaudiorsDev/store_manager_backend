const router = require('express').Router();

const { salesController } = require('../controllers');

router.get('/', salesController.listAllSales);

router.get('/:id', salesController.getSaleById);

router.post('/', salesController.postSale);

module.exports = router;