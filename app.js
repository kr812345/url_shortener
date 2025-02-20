const express = require("express");
const routes = require("./routes.js");
const app = express();
const db = require("./db.js");

const PORT = process.env.PORT || 1234;

db();

app.use(express.json());

app.use("/api", routes);

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
