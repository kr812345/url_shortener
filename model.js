const mongoose = require("mongoose");

const urlSchema = new mongoose.Schema({
  longUrl: {
    type: String,
    trim: true,
  },
  shortUrl: {
    type: String,
    trim: true, 
  },
  clicks: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model("Url", urlSchema);
