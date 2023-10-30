const connection = require('./connection');

const getAllProducts = async () => {
  const [products] = await connection.execute(
    'SELECT * FROM products',
  );
  return products;
};

const getProductById = async (id) => {
  const [product] = await connection.execute(
    'SELECT * FROM StoreManager.products WHERE id = ?',
    [id],
  );
  return product[0];
};

const postNewProduct = async (name) => {
  const [product] = await connection.execute(
    'INSERT INTO products (name) VALUES (?)',
    [name],
  );
  return product;
};

const updateProduct = async (name, id) => {
  const [product] = await connection.query(
    'UPDATE products SET name = ? WHERE id = ?',
    [name, id],
  );
  return product;
};

module.exports = {
  getAllProducts,
  getProductById,
  postNewProduct,
  updateProduct,
};
