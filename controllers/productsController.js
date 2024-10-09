// Sample data (you can connect to a database here)
const products = [
  { id: 1, name: "Product 1", price: 10.99 },
  { id: 2, name: "Product 2", price: 19.99 },
  // Add more products
];

// Function to get all products
exports.getProducts = (req, res) => {
  res.json(products);
};
