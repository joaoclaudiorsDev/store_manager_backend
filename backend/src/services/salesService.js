const { salesModel } = require('../models');

const getAllSales = async () => {
  const allSales = await salesModel.getAllSales();
  if (allSales.length === 0) {
    return { status: 'NOT_FOUND', data: { message: 'Sales not found' } };
  }
  return { status: 'OK', data: allSales };
};

const getSaleById = async (id) => {
  const data = await salesModel.getSalesById(id);
  if (!data || data.length === 0) {
    return { status: 'NOT_FOUND', data: { message: 'Sale not found' } };
  }
  return { status: 'OK', data };
};

module.exports = {
  getAllSales,
  getSaleById,
};
