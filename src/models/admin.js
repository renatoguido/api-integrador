const { DataTypes } = require("sequelize");
const db = require("../config/database");

const User = db.define(
  "User",
  {
    username: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "users",
  }
);

db.sync().then(() => {
    console.log('Tabelas criadas com sucesso!');
  }).catch((error) => {
    console.error('Erro ao criar tabelas:', error);
  });

module.exports = User;