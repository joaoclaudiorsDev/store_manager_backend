const { expect } = require('chai');
const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const productList = require('../mocks/product');
const { productModel } = require('../../../src/models');
const { productController } = require('../../../src/controllers');

chai.use(sinonChai);

describe('Controller', function () {
  afterEach(function () {
    sinon.restore();
  });

  const [data] = productList; 

  it('should return a list of products', async function () {
    sinon.stub(productModel, 'getAllProducts').resolves([data]);
    const req = {};
    const res = {
      json: sinon.spy(),
      status: sinon.stub().returnsThis(),
    };

    await productController.listAllProducts(req, res);

    expect(res.json).to.have.been.calledWith([data]);
    expect(res.status).to.have.been.calledWith(200);
  });

  it('should return a specific product by ID', async function () {
    const id = 1;
    sinon.stub(productModel, 'getProductById').withArgs(id).resolves(data);
    const req = { params: { id } };
    const res = {
      json: sinon.spy(),
      status: sinon.stub().returnsThis(),
    };

    await productController.getProductById(req, res);

    expect(res.json).to.have.been.calledWith(data);
    expect(res.status).to.have.been.calledWith(200);
  });
});