const {sequelize, DataTypes} = require("sequelize");
const db = require('../config/database.js');

const Order = db.define(
    'Order',
    {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
          },
          nome: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          cpf: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          contato: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          servico: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          horarioPreferencial: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          status: {
            type: DataTypes.STRING,
            allowNull: false,
          },
        },
        {
          tableName: 'orders',
          sequelize,
        }
      )

module.exports = Order;
