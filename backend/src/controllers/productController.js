const Services = require('../services/index');
const status = require('../../utils/status'); 

const listAllProducts = async (_req, res) => {
  const products = await Services.productsServices.getAll();
  return res.status(status.OK).json(products);
};

const getProductById = async (req, res) => {
  const { id } = req.params;
  const product = await Services.productsServices.getById(id);

  if (!product) {
    return res.status(status.NOT_FOUND).json({ error: status.ErrorMessages.NOT_FOUND });
  }

  return res.status(status.OK).json(product);
};

module.exports = {
  listAllProducts,
  getProductById,
};