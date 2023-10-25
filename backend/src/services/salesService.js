const { salesModel } = require('../models');

const getAllSales = async () => {
  const allSales = await salesModel.getAllSales();
  if (allSales.length === 0) {
    return { status: 'NOT_FOUND', data: { message: 'Sales not found' } };
  }
  return { status: 'OK', data: allSales };
};

const getSaleById = async (id) => {
  const sale = await salesModel.getSalesById(id);
  if (!sale) {
    return { status: 'NOT_FOUND', data: { message: 'Sale not found' } };
  }
  return { status: 'OK', data: sale };
};

module.exports = {
  getAllSales,
  getSaleById,
};
