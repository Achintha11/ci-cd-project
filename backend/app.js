const express = require("express");
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Simple route for the root URL
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// Another route for `/about`
app.get("/about", (req, res) => {
  res.send("About Page");
});

// POST route example
app.post("/data", (req, res) => {
  const data = req.body;
  res.send(`You sent: ${JSON.stringify(data)}`);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
