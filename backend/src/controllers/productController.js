const Services = require('../services/index');
const status = require('../../utils/status'); 

async function listAllProducts(req, res) {
  try {
    const products = await Services.getAllProducts();
    res.status(status.httpStatus('OK')).json(products);
  } catch (error) {
    res.status(status.httpStatus('INTERNAL_SERVER_ERROR'))
      .json({ error: status.ErrorMessages.INTERNAL_SERVER_ERROR });
  }
}
  
async function getProductById(req, res) {
  const productId = req.params.id;
  if (!productId) {
    return res.status(status.httpStatus('BAD_REQUEST'))
      .json({ error: status.ErrorMessages.BAD_REQUEST });
  }
  
  try {
    const product = await Services.getProductById(productId);
  
    if (!product) {
      return res.status(status.httpStatus('NOT_FOUND'))
        .json({ error: status.ErrorMessages.NOT_FOUND });
    }
  
    res.status(status.httpStatus('OK')).json(product);
  } catch (error) {
    res.status(status.httpStatus('INTERNAL_SERVER_ERROR'))
      .json({ error: status.ErrorMessages.INTERNAL_SERVER_ERROR });
  }
}
  
module.exports = {
  listAllProducts,
  getProductById,
};
