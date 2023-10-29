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

const saleWithoutProductId = [
  {
    quantity: 1,
  },
];

const saleWithoutQuantity = [
  {
    quantity: 1,
  },
];

const saleQuantityZero = [
  {
    quantity: 0,
  },
];

const saleProductIdUndefined = [
  {
    productId: 13,
    quantity: 2,
  },
];

const mockSaleId = {
  date: '2023-10-19T17:48:55.000Z',
  productId: 1,
  quantity: 5,
};

const saleProductIdError = { message: '"productId" is required' };

const saleQuantityError = { message: '"quantity" is required' };

const saleQuantityZeroError = { 
  message: '"quantity" must be greater than or equal to 1', 
};

const saleProductIdUndefinedError = { message: 'Product not found' };

module.exports = {
  saleList,
  saleWithoutProductId,
  saleWithoutQuantity,
  saleQuantityZero,
  mockSaleId,
  saleProductIdError,
  saleQuantityError,
  saleQuantityZeroError,
  saleProductIdUndefined,
  saleProductIdUndefinedError,
};