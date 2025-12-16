const express = require("express");
const app = express();

// Middleware to handle JSON data
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("Backend is working!");
});

// Start server
app.listen(10000, () => {
  console.log("Server running on port 5000");
});
