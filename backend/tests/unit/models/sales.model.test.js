const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../src/models/connection');

const { saleList, mockSaleId } = require('../mocks/sales');
const { salesModel } = require('../../../src/models');

describe('Model', function () {
  afterEach(function () { return sinon.restore(); });

  it('should return all products', async function () {
    sinon.stub(connection, 'execute').resolves([saleList]);
  
    const allSales = await salesModel.getAllSales();

    expect(allSales).to.be.an('array');
    expect(allSales[0]).to.be.an('object');
    expect(allSales[0]).to.have.property('saleId');
    expect(allSales[0]).to.have.property('date');
    expect(allSales[0].saleId).to.be.a('number');
    expect(allSales[0].date).to.be.a('string');
  });

  it('should return a product by ID', async function () {
    sinon.stub(connection, 'execute').resolves([[mockSaleId]]);

    const sale = await salesModel.getSalesById(1);
  
    expect(sale).to.be.an('array');
  });
});