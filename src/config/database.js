const Sequelize = require("sequelize");
const dotenv = require("dotenv");

dotenv.config();

const dB_NAME = process.env.DB_NAME;
const dB_USER = process.env.DB_USER;
const dB_PASS = process.env.DB_PASS;
const dB_HOST = process.env.DB_HOST;


  const db = new Sequelize(dB_NAME, dB_USER, dB_PASS,{
    dialect:"mysql",
    host: dB_HOST,
  });

async function hasConnection(){
    try{
        await db.authenticate();
        console.log("DB connect")
    }catch(error){
        console.log("Falha ao acessar o DB");
    }
}
Object.assign(db, {hasConnection});

module.exports = db;