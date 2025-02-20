const express = require("express");
const { connectToDb } = require("./db");
require("dotenv").config();
const urlRoutes = require('./routes');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/api', urlRoutes);


app.get('/api', (req, res) => {
  res.json({
    message: "List of all APIs",
    endpoints: [
      { method: "GET", path: "/api" },
      { method: "POST", path: "/api/shorten" },
      { method: "GET", path: "/api/:shortUrl" }
    ]
  });
});

connectToDb((error) => {
  try {
    app.listen(port, () => {
      console.log(`App is running on ${port} and connected to Mongodb.`);
    });
  } catch (error) {
    console.log(error);
    
  }
});
