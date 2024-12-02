const express = require("express");
const app = express();

app.listen(8000, () => {
  console.log("The application is running on localhost:8000");
});

const router = express.Router();
router.get("/", (req, res) => {
  res.json("my name is sarah");
});

module.exports = router;
