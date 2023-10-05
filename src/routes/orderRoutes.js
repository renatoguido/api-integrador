const express = require("express");
const orderController = require('../controllers/orderController');
const authController = require("../controllers/authController");

const router = express.Router();

router.post("/createorder", orderController.createOrder);
router.get("/orders", orderController.getAll);
router.get("/orders/:id", orderController.getById);
router.put("/order/:id",orderController.updateOrder);


router.post("/register", authController.register);
router.post("/login", authController.login);


module.exports = router;