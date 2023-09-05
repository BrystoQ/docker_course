require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 8080;

const db = require("./db");
db.connect(app);

require("./routes")(app);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.on("ready", () => {
  app.listen(port, () => {
    console.log("Server is up on port", port);
  });
});

module.exports = app;
