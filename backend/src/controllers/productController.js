const { productService } = require('../services');
const { httpStatus } = require('../../utils/status'); 

const listAllProducts = async (req, res) => {
  const { data, status } = await productService.getAllProducts();
  return res.status(httpStatus(status)).json(data);
};

const getProductById = async (req, res) => {
  const { id } = req.params;
  const { data, status } = await productService.getProductById(id);
  return res.status(httpStatus(status)).json(data);
};

module.exports = {
  listAllProducts,
  getProductById,
};