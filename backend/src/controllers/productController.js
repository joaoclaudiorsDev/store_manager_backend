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

const postNewProduct = async (req, res) => {
  const { name } = req.body;
  const { status, data } = await productService.postNewProduct(name);
  return res.status(status).json(data);
};

const updateProduct = async (req, res) => {
  const { name } = req.body;
  const { id } = req.params;
  const { status, data } = await productService.updateProduct(name, id);
  if (status === 404 || status === 422 || status === 400) return res.status(status).json(data);
  
  return res.status(status).json({
    id: Number(id),
    name,
  });
};

module.exports = {
  listAllProducts,
  getProductById,
  postNewProduct,
  updateProduct,
};