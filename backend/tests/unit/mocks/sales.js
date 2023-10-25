const date = '2023-10-24T12:00:45.000Z';

const saleList = [
  {
    saleId: 1,
    date,
    productId: 1,
    quantity: 5,
  },
  {
    saleId: 1,
    date,
    productId: 2,
    quantity: 10,
  },
  {
    saleId: 2,
    date,
    productId: 3,
    quantity: 15,
  },
];

const mockSaleId = {
  date: '2023-10-19T17:48:55.000Z',
  productId: 1,
  quantity: 5,
};

module.exports = {
  saleList,
  mockSaleId,
};