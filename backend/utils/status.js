// utils/constants.js

const declaHttpStatus = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
};
 
const httpStatus = (status) => declaHttpStatus[status] || 500;

const ErrorMessages = {
  NOT_FOUND: 'Recurso não encontrado.',
  BAD_REQUEST: 'Solicitação inválida.',
  INTERNAL_SERVER_ERROR: 'Erro interno do servidor.',
};
  
module.exports = {
  httpStatus,
  ErrorMessages,
};
