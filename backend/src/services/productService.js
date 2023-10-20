const { productModel } = require('../models');

async function getAllProducts() {
  const products = await productModel.getAllProducts();
  return products;
}

const getProductById = async (id) => {
  const product = await productModel.getProductById(id);
  if (!product) {
    return { status: 'NOT_FOUND', data: { message: 'Product not found' } };
  }
  return { status: 'OK', data: product };
};

module.exports = {
  getAllProducts,
  getProductById,
};
