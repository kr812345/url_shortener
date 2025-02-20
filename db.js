const mongoose = require("mongoose");

let dbConnection;

const urlSchema = mongoose.Schema({
  longUrl: String,
  shortUrl: String,
  clicks: { type: Number, default: 0 },
});

module.exports = { url: mongoose.model("url", urlSchema) };

const MongoUri = process.env.mongodbUri;

module.exports = {
  connectToDb: (callback) => {
    mongoose
      .connect(MongoUri)
      .then((client) => {
      dbConnection = client.connection;
      callback(null, dbConnection);
      })
      .catch((error) => {
        callback(error);
      }); 
  },
};