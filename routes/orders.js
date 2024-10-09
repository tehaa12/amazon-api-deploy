const express = require("express");
const router = express.Router();
const { createOrder, getOrders } = require("../controllers/ordersController");

// Route to get user orders
router.get("/", getOrders);

// Route to create an order
router.post("/", createOrder);

module.exports = router;
