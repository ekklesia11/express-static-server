const express = require("express");
const path = require("path");

const app = express();

const PORT = 5001;

app.get("/", (req, res, err) => {
  res.send("hello world");
});

app.use("/static", express.static(path.join(__dirname, "public")));

app.listen(PORT, () => {
  console.log("server listening on 5001 ...");
});
