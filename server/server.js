require("dotenv").config();
const logger = require("./config/logger");

const express = require("express");
const app = express();
const port = process.env.PORT;

const db = require("./db");
db.connect(app);

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

const cors = require("cors");
app.use(cors());

// Add routes
require("./routes")(app);

app.get("/", (req, res) => {
  res.send(`The server is on ${process.env.NODE_ENV} mode`);
});

app.on("ready", () => {
  app.listen(port, () => {
    logger.info(`Server is up on port ${port}`);
  });
});

module.exports = app;
