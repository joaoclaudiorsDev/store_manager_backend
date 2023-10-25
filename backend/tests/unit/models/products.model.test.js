const { expect } = require('chai');
const sinon = require('sinon');

const productList = require('../mocks/product');
const { productModel } = require('../../../src/models');

describe('Model', function () {
  afterEach(function () {
    sinon.restore();
  });
    
  it('should return all products', async function () {
    sinon.stub(productModel, 'getAllProducts').resolves(productList);

    const allProducts = await productModel.getAllProducts();
    
    expect(allProducts).to.be.an('array');
    expect(allProducts[0]).to.be.an('object');
    expect(allProducts[0]).to.have.property('id');
    expect(allProducts[0]).to.have.property('name');
    expect(allProducts[0].id).to.be.a('number');
    expect(allProducts[0].name).to.be.a('string');
  });
    
  it('should return a product by ID', async function () {
    const productId = 1;
    sinon.stub(productModel, 'getProductById').resolves(productList.find((product) => product.id === productId));
    
    const product = await productModel.getProductById(productId);
    
    expect(product).to.be.an('object');
    expect(product).to.have.property('id');
    expect(product).to.have.property('name');
    expect(product.id).to.be.a('number');
  });
});