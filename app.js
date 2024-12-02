const express = require("express");
const app = express();

const router = require("./router");

app.use(router);
app.listen(8000, () => {
  console.log("The application is running on localhost:8000");
});
