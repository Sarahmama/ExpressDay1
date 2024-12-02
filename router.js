const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json("my name is sarah");
});

module.exports = router;
