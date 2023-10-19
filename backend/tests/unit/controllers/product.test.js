const { expect } = require('chai');
const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const productList = require('../mocks/product');
const Model = require('../../../src/models');
const Controllers = require('../../../src/controllers');

chai.use(sinonChai);

describe('Controller', function () {
  afterEach(function () {
    sinon.restore();
  });

  const [data] = productList; 

  it('', async function () {
    sinon.stub(Model.products, 'getAll').resolves(data);
  });

  it('', async function () {
    sinon.stub(Model.products, 'getById').resolves(data);
  });
});