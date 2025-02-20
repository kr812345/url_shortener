require("dotenv").config();
const urlM = require("./model.js");
const crypto = require("crypto");
const Mongoose = require("mongoose");
const { ObjectId } = require("mongodb");

const baseUrl = process.env.baseUrl;

const genUniqId = () => {
  return crypto.randomBytes(3).toString("hex");
};

module.exports = controller = {
  shortener: async ({ longUrl }) => {
    const shortUrl = `${baseUrl}/${genUniqId()}`;
    const urlObj = await urlM.create({ longUrl, shortUrl });
    console.log(urlObj);
    return urlObj;
  },

  shortUrl: async ({ id_ }) => {
    const url = await urlM.findOne({ _id: id_ });
    if (!url) {
      return { msg: "Url Not Found." };
    }

    url.clicks += 1;
    await url.save();
    return url.longUrl;
  },

  getStats: async (id) => {
    const url = await urlM.findOne({ _id: id });

    return url.clicks;
  },
};
