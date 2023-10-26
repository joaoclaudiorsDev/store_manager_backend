const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { salesService } = require('../../../src/services');
const { salesController } = require('../../../src/controllers');

const { expect } = chai;
chai.use(sinonChai);

describe('Controller', function () {
  afterEach(function () { return sinon.restore(); });

  it('should return a list of sales', async function () {
    const mockReq = {};
    const mockRes = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub().returnsThis(),
    };
    sinon.stub(salesService, 'getAllSales').resolves({ status: 'OK', data: [] });
    await salesController.listAllSales(mockReq, mockRes);
    expect(mockRes.status).to.be.calledWith(200);
  });
  
  it('should return a specific sale by ID', async function () {
    const mockReq = { params: { id: 1 } };
    const mockRes = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };
    sinon.stub(salesService, 'getSaleById').resolves({ status: 'OK', data: {} });
    await salesController.getSaleById(mockReq, mockRes);
    expect(mockRes.status).to.be.calledWith(200);
  });
});
