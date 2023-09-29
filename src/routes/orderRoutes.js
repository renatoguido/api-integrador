const express = require("express");
const orderController = require('../controllers/orderController');

const router = express.Router();

router.post("/order", orderController.createOrder);
router.get("/order", orderController.getAll);
router.get("/order/:id", orderController.getById);
router.put("/order/:id", orderController.updateOrder);

module.exports = router;