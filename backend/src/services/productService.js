const Model = require('../models/index');

async function getAllProducts() {
  const products = await Model.getAllProducts();
  return products;
}

const getProductById = async (idProduct) => Model.products.getById(Number(idProduct));

module.exports = {
  getAllProducts,
  getProductById,
};
