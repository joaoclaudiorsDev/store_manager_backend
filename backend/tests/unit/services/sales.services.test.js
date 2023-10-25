const { expect } = require('chai');
const sinon = require('sinon');

const { saleList } = require('../mocks/sales');
const { salesService } = require('../../../src/services');
const { salesModel } = require('../../../src/models');

describe('Services', function () {
  afterEach(function () {
    sinon.restore();
  });

  it('should return all products', async function () {
    sinon.stub(salesModel, 'getAllSales').resolves(saleList);
    const allSales = await salesService.getAllSales();
    expect(allSales.status).to.be.equal('OK');
    expect(allSales.data).to.be.an('array');
  });

  it('should return a product by ID', async function () {
    sinon.stub(salesModel, 'getSalesById').resolves(saleList.mockSaleId);
    const sale = await salesService.getSaleById(1);
    expect(sale.status).to.be.equal('NOT_FOUND');
    expect(sale.data).to.be.an('object');
  });
});