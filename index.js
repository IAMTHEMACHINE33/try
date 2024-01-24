const express = require("express");
const app = express();

app.get("/ping", (req, res) => {
  res.json("pong")
  return;
})
app.listen(3333, () =>
{
  console.info(`app listening at http://localhost:3333`)
})