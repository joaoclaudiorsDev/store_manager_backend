const { salesService } = require('../services');
const { httpStatus } = require('../../utils/status'); 

const listAllSales = async (req, res) => {
  const { data, status } = await salesService.getAllSales();
  return res.status(httpStatus(status)).json(data);
};

const getSaleById = async (req, res) => {
  const { id } = req.params;
  const { data, status } = await salesService.getSaleById(id);
  return res.status(httpStatus(status)).json(data);
};

const postSale = async (req, res) => {
  const { body } = req;
  const { status, data } = await salesService.postNewSale(body);
  return res.status(status).json(data);
};

module.exports = {
  listAllSales,
  getSaleById,
  postSale,
};