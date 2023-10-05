// controllers/authController.js
const bcrypt = require('bcrypt');
const { generateToken } = require('../service/auth'); // Importe a função generateToken
const User = require('../models/admin'); // Importe o modelo de usuário

const authController = {
  register: async (req, res) => {
    try {
      const { username, password } = req.body;

      
      const existingUser = await User.findOne({ where: { username } });

      if (existingUser) {
        return res.status(400).json({ message: 'Nome de usuário já existe' });
      }

      // Hash da senha antes de armazená-la no banco de dados
      const hashedPassword = await bcrypt.hash(password, 10);

      // Crie um novo usuário
      const newUser = await User.create({ username, password: hashedPassword });

      res.status(201).json({ message: 'Usuário registrado com sucesso' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro ao registrar usuário' });
    }
  },

  login: async (req, res) => {
    try {
      const { username, password } = req.body;

      // Procure o usuário no banco de dados
      const user = await User.findOne({ where: { username } });

      if (!user) {
        return res.status(401).json({ message: 'Credenciais inválidas' });
      }

      // Verifique a senha
      const isPasswordValid = await bcrypt.compare(password, user.password);

      if (!isPasswordValid) {
        return res.status(401).json({ message: 'Credenciais inválidas' });
      }

      // Gere um token JWT
      const token = generateToken({ userId: user.id });

      res.status(200).json({ token });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro ao fazer login' });
    }
  },
};

module.exports = authController;