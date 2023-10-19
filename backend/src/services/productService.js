const Model = require('../models/index');

async function getAllProducts() {
  try {
    const products = await Model.getAllProducts();
    return products;
  } catch (error) {
    throw new Error('Erro ao buscar produtos do banco de dados');
  }
}

async function getProductById(id) {
  try {
    const product = await Model.getProductById(id);
    
    if (!product) {
      throw new Error('Produto não encontrado');
    }

    return product;
  } catch (error) {
    throw new Error('Erro ao buscar o produto por ID');
  }
}

module.exports = {
  getAllProducts,
  getProductById,
};
