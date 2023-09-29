const express = require("express");
const router = require('./routes/orderRoutes.js');
const cors = require('cors');

const app = express();

app.use(cors()); //para nao dar erro quando se ultiliza localhost igual
app.use(express.json());
app.use(router);


module.exports = app; 