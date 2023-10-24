const { expect } = require('chai');
const sinon = require('sinon');

const productList = require('../mocks/product');
const { productService } = require('../../../src/services');
const { productModel } = require('../../../src/models');

describe('Services', function () {
  afterEach(function () {
    sinon.restore();
  });

  it('should return all products', async function () {
    sinon.stub(productModel, 'getAllProducts').resolves(productList);
    const allProducts = await productService.getAllProducts();
    expect(allProducts.status).to.be.equal('OK');
    expect(allProducts.data).to.be.an('array');
  });

  it('should return a product by ID', async function () {
    const id = 1;

    sinon.stub(productModel, 'getProductById').withArgs(id).resolves(productList[0]);

    const result = await productService.getProductById(id);

    expect(result.status).to.equal('OK');
    expect(result.data).to.deep.equal(productList[0]);
  });
});