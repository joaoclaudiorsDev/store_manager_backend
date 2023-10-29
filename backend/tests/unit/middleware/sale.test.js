const { expect } = require('chai');
const sinon = require('sinon');

const { productModel } = require('../../../src/models');

const { saleList,
  saleWithoutProductId,
  saleProductIdError,
  saleQuantityZero,
  saleQuantityZeroError,
  saleProductIdUndefined,
  saleProductIdUndefinedError } = require('../mocks/sales');

const { 
  validateProductId, 
  quantityIsZeroOrLess, 
  validateProductsWithId,
} = require('../../../src/middlewares');

describe('Middlewares.sale', function () {
  afterEach(function () {
    sinon.restore();
  });

  it('Successful upselling', async function () {
    const request = { body: saleList };
    const response = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };
    const next = sinon.stub();
  
    await validateProductId(request, response, next);
  
    expect(next).to.have.been.calledWith();
  });
  it('Check if there is an error when trying to add sale without productId', async function () {
    const request = { body: saleWithoutProductId };
    const response = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };
    const next = sinon.stub();
  
    await validateProductId(request, response, next);
  
    expect(response.status).to.have.been.calledWith(400);
    expect(response.json).to.have.been.calledWith(saleProductIdError);
  });
  
  it('Check if there is an error when trying to add sale with quantity 0', async function () {
    const request = { body: saleQuantityZero };
    const response = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };
    const next = sinon.stub();
  
    await quantityIsZeroOrLess(request, response, next);
  
    expect(response.status).to.have.been.calledWith(422);
    expect(response.json).to.have.been.calledWith(saleQuantityZeroError);
  });

  it('Check if there is an error when trying to add a sale with a non-existent productId', async function () {
    const request = { body: saleProductIdUndefined };
    const response = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };
    const next = sinon.stub();
  
    sinon.stub(productModel, 'getAllProducts').resolves(saleList);
  
    await validateProductsWithId(request, response, next);
  
    expect(response.status).to.have.been.calledWith(404);
    expect(response.json).to.have.been.calledWith(saleProductIdUndefinedError);
  });
});