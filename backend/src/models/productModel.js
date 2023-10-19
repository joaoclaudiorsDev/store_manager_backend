const connection = require('../../utils/connection/connection');

const getAllProducts = async () => {
  const [products] = await connection.execute('SELECT * FROM StoreManager.products');
  return products;
};

const getProductById = async (id) => {
  const [product] = await connection.execute(
    'SELECT * FROM StoreManager.products WHERE id = ?',
    [id],
  );
  if (product.length === 0) {
    return null;
  }
  return product[0];
};

module.exports = {
  getAllProducts,
  getProductById,
};
