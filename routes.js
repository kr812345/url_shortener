const express = require('express');
const router = express.Router();
const { shortener, shortUrl,getStats } = require("./controller");

router.post("/shorten", (req, res) => {
  const longUrl = req.body;

  shortener(longUrl);
});

router.get("/:shortUrl", (req, res) => {
  const shortUrl_ = req.params.shortUrl;

  shortUrl(shortUrl_);
});

router.get('/stats/:id', (req, res) => {
    const id = req.params.id;

    const clicks = getStats(id);
    console.log(clicks);
    res.status(200).send(clicks);
})

module.exports = router;