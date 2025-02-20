const mongoose = require("mongoose");
require("dotenv").config();

const db = () => {
  mongoose
    .connect(process.env.mongoUri)
    .then(() => {
      console.log("Database connected successfully");
    })
    .catch((error) => {
      console.log({
        myMsg: "there is some error in connecting to Database.",
        error,
      });
    });
};

module.exports = db;
