// Sample orders (replace this with database connection)
const orders = [];

// Function to get orders for a user (replace with real database logic)
exports.getOrders = (req, res) => {
  res.json(orders);
};

// Function to create an order (replace with real database logic)
exports.createOrder = (req, res) => {
  const newOrder = req.body;
  orders.push(newOrder);
  res.status(201).json({ message: "Order created", order: newOrder });
};
