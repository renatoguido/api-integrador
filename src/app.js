const express = require("express");
const router = require('./routes/orderRoutes.js');
const cors = require('cors');
const db = require('./config/database.js')
const authRoutes = require('./routes/orderRoutes')

const app = express();

app.use(cors())
app.use(express.json());
app.use(router);

app.use("/auth", authRoutes);

module.exports = app;  