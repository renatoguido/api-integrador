const jwt = require('jsonwebtoken');


const secretKey = '1234';

//  gerar o token jwt
function generateToken(payload) {
  return jwt.sign(payload, secretKey, { expiresIn: '5h' }); // expirar o token 
}

// Função para verificar um token JWT
function verifyToken(token) {
  try {
    const decoded = jwt.verify(token, secretKey);
    return decoded;
  } catch (error) {
    throw new Error('Token inválido');
  }
}

module.exports = { generateToken, verifyToken };