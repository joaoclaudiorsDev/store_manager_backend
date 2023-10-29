const { 
  validateProductId, 
  validateQuantity, 
  quantityIsZeroOrLess,
  validateProductsWithId,
} = require('./validateSales');
  
module.exports = {
  validateProductId,
  validateQuantity,
  quantityIsZeroOrLess,
  validateProductsWithId,
};