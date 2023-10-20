const { expect } = require('chai');
const sinon = require('sinon');

const productList = require('../mocks/product');
const Services = require('../../../src/services');

describe('Services', function () {
  afterEach(function () { return sinon.restore(); });

  it('', async function () {
    sinon.stub(Services, 'getAllProducts').resolves(productList);
    const allProducts = await Services.getAllProducts();
  });

  it('', async function () {
    sinon.stub(Services, 'getProductById').resolves(productList[0]);
    const product = await Services.getProductById(1);
  });
});