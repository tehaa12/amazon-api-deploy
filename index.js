const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

// Initialize Express
const app = express();

// Middleware
app.use(cors()); // Enable CORS for all routes
app.use(bodyParser.json()); // Parse incoming requests

// Routes
const productsRouter = require("./routes/products");
const ordersRouter = require("./routes/orders");

app.use("/products", productsRouter);
app.use("/orders", ordersRouter);

// Set the port (Render will set the PORT environment variable)
const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`API is running on port ${port}`);
});
