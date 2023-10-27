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

const postNewSale = async (data) => {
  const saleId = await salesModel.postNewSale();
  data.map(async (sale) => {
    const { productId, quantity } = sale;
    await salesModel.registerSale(saleId, productId, quantity);
  });
  return { status: 201, data: { id: saleId, itemsSold: data } };
};

module.exports = {
  getAllSales,
  getSaleById,
  postNewSale,
};
