const express = require("express");
const dotenv = require("dotenv");
dotenv.config({
  path: "./.env",
});
const app = express();
const PORT = process.env.PORT || 3000;
const connectDB = require("./db");

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Failed to start server:", error);
  });

app.get("/", (req, res) => {
  res.send("Hello World!");
});
