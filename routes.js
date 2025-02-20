const express = require("express");
const router = express.Router();
const { shortener, shortUrl, getStats } = require("./controller.js");

router.post("/shorten", async (req, res) => {
  const longUrl = req.body;

  const urlObj = await shortener(longUrl);
  res.json({ urlObj });
});

router.get("/:id", async (req, res) => {
  const id_ = req.params.id;
  console.log("helloooo.......");
  const longUrl = await shortUrl(id_);
  res.redirect(longUrl);
});

router.get("/stats/:id", async (req, res) => {
  const id = req.params.id;

  const clicks = await getStats(id);
  res.status(200).json({ clicks });
});

module.exports = router;
