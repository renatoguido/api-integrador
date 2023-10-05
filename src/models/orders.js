const { DataTypes } = require("sequelize");
const db = require('../config/database.js');

const Order = db.define(
  'Order',
  {
    id:{
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    }, 
    nome_completo: {
      type: DataTypes.STRING,
      allowNull: false
    },
    cpf: {
      type: DataTypes.STRING,
      allowNull: false,  
    },
    telcontato: {
      type: DataTypes.STRING,
      allowNull: false,
    },  
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cep:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    numerocasa:{
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    logradouro:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    bairro:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    localidade: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    uf:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    plan: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    time: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'Pendente',
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    tableName: 'order',
    db,
  });

  db.sync().then(() => {
    console.log('Tabelas criadas com sucesso!');
  }).catch((error) => {
    console.error('Erro ao criar tabelas:', error);
  });


module.exports = Order;
