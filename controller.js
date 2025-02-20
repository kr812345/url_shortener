require('dotenv').config();
const urlM = require("./db");
const crypto = require('crypto');

const baseUrl = process.env.baseUrl;

const genUniqId = () => {
    return crypto.randomBytes(3).toString('hex'); // 3 bytes = 6 hex characters
}

const id = genUniqId();

module.exports = controller = {
  shortener: async (longUrl) => {
    
    const shortUrl = `${baseUrl}/${genUniqId()}`;
    console.log(shortUrl);
    urlObj = await urlM.create({ longUrl, shortUrl });
    return urlObj;
  },

  shortUrl: async (shortUrl) => {
    const url = await urlM.findOne({ shortUrl });
    if (!url) {
      res.status(404).send("Url not found.");
    }

    url.clicks += 1;
    await url.save();
    res.redirect(url.longUrl);
  },

  getStats: async (id) => {
    const url = await urlM.findOne({ _id: ObjectId(id) });
    console.log(url.clicks);
    return url.clicks;
  },
};
