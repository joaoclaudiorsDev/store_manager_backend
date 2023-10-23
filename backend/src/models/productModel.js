const camelize = require('camelize');
const connection = require('./connection');

const getAllProducts = async () => {
  const [products] = await connection.execute('SELECT * FROM StoreManager.products');
  return camelize(products);
};

const getProductById = async (id) => {
  const [product] = await connection.execute(
    'SELECT * FROM StoreManager.products WHERE id = ?',
    [id],
  );
  return camelize(product[0]);
};

module.exports = {
  getAllProducts,
  getProductById,
};
