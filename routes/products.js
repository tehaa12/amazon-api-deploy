const express = require("express");
const router = express.Router();
const { getProducts } = require("../controllers/productsController");

// Route to get all products
router.get("/", getProducts);

module.exports = router;
