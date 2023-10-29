const { productModel } = require('../models');

const validateProductId = (req, res, next) => {
  const data = req.body;

  const productIdUndefined = data.some((item) => item.productId === undefined);

  if (productIdUndefined) return res.status(400).json({ message: '"productId" is required' });
  next();
};
const validateQuantity = (req, res, next) => {
  const data = req.body;
  const quantityUndefined = data.some((item) => !item.quantity);
  if (quantityUndefined) return res.status(400).json({ message: '"quantity" is required' });

  next();
};

const quantityIsZeroOrLess = (req, res, next) => {
  const data = req.body;
  const functionIsTrue = data.some((item) => item.quantity <= 0);
  if (functionIsTrue) {
    return res.status(422).json({ 
      message: '"quantity" must be greater than or equal to 1', 
    }); 
  }
  next();
};

const validateProductsWithId = async (req, res, next) => {
  const products = await productModel.getAllProducts();
  const productList = products.map((product) => product.id);
  const data = req.body;
  const functionIsTrue = data.every((item) => productList.includes(item.productId));
  if (!functionIsTrue) {
    return res.status(404).json({ message: 'Product not found' });
  }

  next();
};

module.exports = {
  validateProductId,
  validateQuantity,
  quantityIsZeroOrLess,
  validateProductsWithId,
};