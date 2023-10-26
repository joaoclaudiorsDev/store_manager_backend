const { productModel } = require('../models');

async function getAllProducts() {
  const product = await productModel.getAllProducts();
  if (!product) {
    return { status: 'NOT_FOUND', data: { message: 'Product not found' } };
  }
  return { status: 'OK', data: product };
}

const getProductById = async (id) => {
  const product = await productModel.getProductById(id);
  if (!product) {
    return { status: 'NOT_FOUND', data: { message: 'Product not found' } };
  }
  return { status: 'OK', data: product };
};

const postNewProduct = async (name) => {
  if (!name) {
    return { status: 400, data: { message: '"name" is required' } };
  }
  if (name.length < 5) {
    return { status: 422, data: { message: '"name" length must be at least 5 characters long' } };
  }
  const productData = await productModel.postNewProduct(name);
  const data = await productModel.getProductById(productData.insertId);
  return { status: 201, data };
};

module.exports = {
  getAllProducts,
  getProductById,
  postNewProduct,
};
