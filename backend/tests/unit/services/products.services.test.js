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
  
  it('should create a new product', async function () {
    sinon.stub(productModel, 'postNewProduct').resolves({ insertId: 1 });
    sinon.stub(productModel, 'getProductById').withArgs(1).resolves({ id: 1, name: 'Test Product' });

    const newProduct = await productService.postNewProduct('Test Product');

    expect(newProduct.status).to.equal(201);
    expect(newProduct.data.id).to.equal(1);
    expect(newProduct.data.name).to.equal('Test Product');
  });

  it('The product must update successfully', async function () {
    const id = 2;
    const name = 'Traje de encolhimento';
    const productUpdated = {
      id,
      name,
    };
    sinon.stub(productModel, 'getProductById').withArgs(id).resolves(productUpdated);
    sinon.stub(productModel, 'updateProduct').withArgs(name, id).resolves(productUpdated);

    const updatedProduct = await productService.updateProduct(name, id);

    expect(updatedProduct).to.be.an('object');
    expect(updatedProduct.status).to.equal(200);
    expect(updatedProduct.productData).to.be.deep.equal(productUpdated);
  });

  it('should be an error when updating a product with a name less than 5', async function () {
    sinon.stub(productModel, 'updateProduct').resolves('as', 1);

    const product = await productService.updateProduct('as', 1);

    expect(product).to.be.an('object');
    expect(product.status).to.equal(422);
    expect(product.data).to.be.deep.equal({ message: '"name" length must be at least 5 characters long' });
  });

  it('should be an error registering without a name', async function () {
    sinon.stub(productModel, 'postNewProduct').resolves({ message: '"name" is required' });

    const product = await productService.postNewProduct('');

    expect(product).to.be.an('object');
    expect(product.data).to.be.deep.equal({ message: '"name" is required' });
  });

  it('should be an error when updating a product with a non-existent id', async function () {
    const id = 16;
    sinon.stub(productModel, 'getProductById').withArgs(id).resolves(undefined);

    const updatedProduct = await productService.updateProduct('Traje de encolhimento', id);

    expect(updatedProduct).to.be.an('object');
    expect(updatedProduct.status).to.equal(404);
    expect(updatedProduct.data.message).to.equal('Product not found');
  });
});
