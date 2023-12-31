const connection = require('./connection');

const getAllSales = async () => {
  const [sales] = await connection.execute(
    `SELECT
      sp.sale_id AS saleId,
      s.date, 
      sp.product_id AS productId, 
      sp.quantity
    FROM
      sales_products AS sp
    INNER JOIN
      sales AS s 
      ON
        sp.sale_id = s.id
    ORDER BY
      sp.sale_id ASC,
      sp.product_id ASC`,  
  );
  return sales; 
};

const getSalesById = async (id) => {
  const [sale] = await connection.execute(
    `SELECT 
    s.date, 
    sp.product_id AS productId, 
    sp.quantity
  FROM
    sales_products AS sp
  INNER JOIN
    sales AS s 
    ON
      sp.sale_id = s.id
  WHERE id = ?
  ORDER BY
    sp.product_id ASC`,
    [id],
  );
  return sale;
};

const postNewSale = async () => {
  const [sale] = await connection.execute(
    'INSERT INTO sales VALUES ()',

  );
  return sale.insertId;
};

const registerSale = async (saleId, productId, quantity) => {
  const [sale] = await connection.execute(
    'INSERT INTO sales_products(sale_id, product_id, quantity) VALUES (?, ?, ?)',
    [saleId, productId, quantity],
  );
  return sale; 
};

module.exports = {
  getAllSales,
  getSalesById,
  postNewSale,
  registerSale,
};
