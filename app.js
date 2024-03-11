const express = require("express");
const service1 = require("./service/obfuscated/service1");
const service2 = require("./service/obfuscated/service2");

const app = express();

// Routes
app.get("/", (req, res) => {
  const result = "API is working on your server";
  res.send(result);
});

app.get("/service1", (req, res) => {
    const result = service1.someFunction();
    res.send(result);
});

app.get("/service2", (req, res) => {
  const result = service2.someFunction();
  res.send(result);
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
